const menu_items = [
  {icon:'cog', text:'Settings', action: () => {console.log('Settings')}},
  {icon:'adjust', text:'Color Scheme', action: () => {console.log('Color Scheme')} },
  {},
  {icon:'trash', text:'Remove', action: () => {console.log('Remove')}}
]

new ContextMenu('#widget-0001', '.command-button', menu_items);
new ContextMenu('#widget-0002', '.command-button', menu_items);
new ContextMenu('#widget-0003', '.command-button', menu_items);
new ContextMenu('#widget-0004', '.command-button', menu_items);
