TODO
====

* determine the possible range of notes (like 5-81) available
  * write call that brings back values to stick in a ddl
  * be able to filter the list by that range
  * value in ddl brings back names of tunings at match note length
  * names of tunings are ordered and filterable with input box
    * after hitting enter, it queries for more info on those tunings
* display list of tunings as 'cards'
  * name, description, number of notes
  * pageable
* clicking on a card goes to a detail view
  * note intervals
  * with possible audio

  ---

* might want to redo database, not store all intervals as ratios
  * only convert to ratios for possible web audio integration,
      or as a toggle on the detail view