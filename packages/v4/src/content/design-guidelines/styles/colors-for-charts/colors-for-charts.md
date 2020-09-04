---
title: Colors for charts
section: styles
hideSource: true
---

import theSystem from './thesystem.gif';
import oneFamily from './onefamily.gif';
import { Alert, Grid, GridItem, Divider } from '@patternfly/react-core';
import { Link } from 'gatsby';
import './colors-for-charts.css';

<Divider />

## Chart colors

Colors for charts includes a recommended set of colors proposed for bar charts, donut charts and pie charts. There are six base colors (blue to orange) that the system is built on. Each base color has its own color family, which includes lighter and darker hues of the base. These families use a monochromatic color order. They are organized in a way that increases contrast while still looking extremely visually appealing. The variation of colors will depend on the type and amount of data at hand.

<Grid>
  <GridItem span={3}>
    <h3>Blue family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--blue-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#8BC1F7</div>
          <div><code>--pf-chart-color-blue-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--blue-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#519DE9</div>
          <div><code>--pf-chart-color-blue-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
          <div class="ws-content-chart-colors ws-content-chart-colors-gallery--blue-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#0066CC</div>
          <div><code>--pf-chart-color-blue-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--blue-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#004B95</div>
          <div><code>--pf-chart-color-blue-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--blue-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#002F5D</div>
          <div><code>--pf-chart-color-blue-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Green family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--green-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#BDE2B9</div>
          <div><code>--pf-chart-color-green-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--green-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#7CC674</div>
          <div><code>--pf-chart-color-green-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--green-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#4CB140</div>
          <div><code>--pf-chart-color-green-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--green-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#38812F</div>
          <div><code>--pf-chart-color-green-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--green-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#23511E</div>
          <div><code>--pf-chart-color-green-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Cyan family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--cyan-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#A2D9D9</div>
          <div><code>--pf-chart-color-cyan-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--cyan-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#73C5C5</div>
          <div><code>--pf-chart-color-cyan-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--cyan-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#009596</div>
          <div><code>--pf-chart-color-cyan-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--cyan-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#005F60</div>
          <div><code>--pf-chart-color-cyan-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--cyan-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#003737</div>
          <div><code>--pf-chart-color-cyan-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Purple family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--purple-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#B2B0EA</div>
          <div><code>--pf-chart-color-purple-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--purple-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#8481DD</div>
          <div><code>--pf-chart-color-purple-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--purple-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#5752D1</div>
          <div><code>--pf-chart-color-purple-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--purple-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#3C3D99</div>
          <div><code>--pf-chart-color-purple-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--purple-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#2A265F</div>
          <div><code>--pf-chart-color-purple-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Gold family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--gold-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#F9E0A2</div>
          <div><code>--pf-chart-color-gold-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--gold-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#F6D173</div>
          <div><code>--pf-chart-color-gold-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--gold-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#F4C145</div>
          <div><code>--pf-chart-color-gold-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--gold-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#F0AB00</div>
          <div><code>--pf-chart-color-gold-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--gold-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#C58C00</div>
          <div><code>--pf-chart-color-gold-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Orange family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--orange-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#F4B678</div>
          <div><code>--pf-chart-color-orange-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--orange-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#EF9234</div>
          <div><code>--pf-chart-color-orange-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--orange-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#EC7A08</div>
          <div><code>--pf-chart-color-orange-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--orange-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#C46100</div>
          <div><code>--pf-chart-color-orange-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--orange-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#8F4700</div>
          <div><code>--pf-chart-color-orange-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Red family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--red-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#C9190B</div>
          <div><code>--pf-chart-color-red-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--red-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#A30000</div>
          <div><code>--pf-chart-color-red-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--red-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#7D1007</div>
          <div><code>--pf-chart-color-red-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--red-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#470000</div>
          <div><code>--pf-chart-color-red-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--red-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#2C0000</div>
          <div><code>--pf-chart-color-red-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
  <GridItem span={3}>
    <h3>Grey family</h3>
    <Grid hasGutter>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--black-1"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#D2D2D2</div>
          <div><code>--pf-chart-color-black-100</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--black-2"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#BBB</div>
          <div><code>--pf-chart-color-black-200</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--black-3"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#8B8D8F</div>
          <div><code>--pf-chart-color-black-300</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--black-4"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#72767B</div>
          <div><code>--pf-chart-color-black-400</code></div>
        </div>
      </GridItem>
      <GridItem span={2}>
        <div class="ws-content-chart-colors ws-content-chart-colors-gallery--black-5"></div>
      </GridItem>
      <GridItem span={10}>
        <div class="ws-content-chart-colors-gallery--information">
          <div>#4D5258</div>
          <div><code>--pf-chart-color-black-500</code></div>
        </div>
      </GridItem>
    </Grid>
  </GridItem>
</Grid>

<Divider className="ws-chart-colors-divider" />

## The system

<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-chart-colors-gridtext">
    <h3>How it works</h3>
    <p>Although the system may seem complex, it is completely customizable. The idea is that you can put together your desired colors and amount of colors and the system will still sort them correctly. Here’s how the system works:</p>
    <p>In this instance, there are only four base colors, therefore four color families. The order begins by going through each base color. Next, it alternates between the lightest and darkest values of each family. Finally, if you still need more colors, it alternates between the second lightest and second darkest colors of each family. In variable-terms: #1a-d base colors, #2a-d [color]-100/[color]-500 alternating, #3a-d [color]-500/[color]-100 alternating, #4a-d [color]-200/[color]-400 alternating, and #5a-d [color]-400/[color]-200 alternating. No matter the colors inputted, the process will remain the same.</p>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src={theSystem} alt="Chart color system example" />
  </GridItem>
</Grid>

<Divider className="ws-chart-colors-divider" />

## Use cases

<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-chart-colors-gridtext">
    <h3>Chart with few variables (1-6)</h3>
    If you are dealing with data that includes six or less variables, we recommend using the base colors to represent each. For example, if you collected data on how many sales were made per product at your organization during one period of time, it could look like this if plotted using a bar chart.
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="fewvariables.png" alt="Few variables examples" />
  </GridItem>
</Grid>

<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-chart-colors-gridtext">
    <h3>Chart with nested (grouped) variables</h3>
    If you have a set of data that includes grouped variables, we recommend using the color families to represent each. Grouped variables would include a set of parents and children variables. Each group would use a color family that would be represented in the same order as the base colors are listed. So, depending on the amount of nested variables you have, the first color family would be blue, then green, cyan, etc. The colors would start over if there are more than 6 groups, returning back to the blue family. An example of this type of data would be quarterly sales broken down by geographical locations.
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="nestedvariables.png" alt="Nested variables example" />
  </GridItem>
</Grid>

<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-chart-colors-gridtext">
    <h3>Chart with many variables (>7)</h3>
    If the set of data includes more than six variables, we recommend applying the multichromatic order system, which uses all of the colors in the color system, to the data. This includes a mix of base colors and colors from their family. An example of this type of data would be the cost of living expenses during a period of time.
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="manyvariables.png" alt="Many variables example" />
  </GridItem>
</Grid>

<Divider className="ws-chart-colors-divider" />

## Using the system with one color family

<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-chart-colors-gridtext">
    You can also use the color order system with one color family. This creates a monochromatic effect. It works using the same logic and order. We recommend using this system for charts with nested variables. The order begins by going through each base color, then lightest, darkest, second lightest, and ending with second darkest. In variable-terms: #1 [color]-300 (base color), #2 [color]-100, #3 [color]-500, #4 [color]-200, #5 [color]-400. The hues will always follow this order.
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src={oneFamily} alt="Monochromatic chart color system example" />
  </GridItem>
</Grid>
