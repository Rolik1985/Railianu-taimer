import React, {useEffect, useState} from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import WatchFace from '../watch/watch';

const App = () => {

    const [status, setStatus] = useState('stop'),
          [timer, setTimer]   = useState(0),
          [date, setDate]     = useState(0);

          useEffect(() => {
            const unsubscribe$ = new Subject();
            interval(1000)
              .pipe(takeUntil(unsubscribe$))
              .subscribe(() => {
                if (status === 'start') {
                    setTimer(val => val += 1);
                }
              });
            return () => {
              unsubscribe$.next();
              unsubscribe$.complete();
            };
          }, [status]);

          const onStartStop = () => {
            status === 'start'? stop():start()
          }
         
          const start = React.useCallback(() => {
            setStatus("start");
          }, []);
         
          const stop = React.useCallback(() => {
            setStatus("stop");
            setTimer(0);
          }, []);
         
          const onReset = React.useCallback(() => {
            setTimer(0);
          }, []);

          const wait = () => {
              let thisdate = new Date().getTime()
                if( thisdate - date < 300) {
                    onWait()
                    console.log('Pause')
                } else {
                    setDate(thisdate)
                }
          }
         
          const onWait = React.useCallback(() => {
            setStatus("wait");
          }, []);

    return(<>
        <WatchFace
        timer = {timer}
        onStart = {onStartStop} 
        onReset = {onReset}
        onWait = {wait}/>
    </>)

}

export default App