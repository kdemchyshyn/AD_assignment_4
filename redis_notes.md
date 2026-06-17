## Redis Use Cases

- session caching\
    |-> saves data about current session (like is_auth, name, ip, etc). Deleted on session end, etc.
- real time caching\
    |-> some data that is fast changed and isn't written to the disk. Allows to use it fast and do not waste memory and time.
- leaderboards\
    |-> data that is calculated once per some time and is expensive to recalculate. So it is cached and saves compute power, but provides needed info.

## Why caching improves application performance?
Caching saves most recent data or the date used most frequently. This allows us to make less read/write operations to disk (which are time consuming) and so improves application performance. 