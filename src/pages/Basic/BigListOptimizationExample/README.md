# Optimization of big lists by extracting to separate memoized component

Unoptimized app performance: 

__~8ms/render__

It can be worse only if you use `key={Math.random()}` :D

![unoptimized](../../../../public/unoptimized.png)
----

List extracted to memoized component but props are recreated on every render:

__~8ms/render__
 
Looks similar to optimized example with passing props, but lack of useMemo and useCallback makes it slow, because component List is rerendering

![unoptimized](../../../../public/unoptimized%20with%20passing%20list.png)

----
List extracted to memoized component and handles data for itself:

__~0.2ms/render__

Here parent component does not manage list state. This is ideal solution, but not always possible due to project requirements.

![optimized](../../../../public/optimized%20with%20contained%20list.png)

----

List extracted to memoized component and props are memoized correctly:

__~0.2ms/render__

Similar to non optimized example, but shows how useMemo and useCallback make big difference 

Even though this example is not as ideal as OptimizedWithContainedList, it shows, that there is no difference in performance between passing correctly memoized props to child component or child managing the state itself

![optimized](../../../../public/optimized%20with%20passing%20list.png)
