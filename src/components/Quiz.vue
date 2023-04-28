<template>
  <div class="quizPage">
    <!-- <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Homepage</el-breadcrumb-item>
      <el-breadcrumb-item>Emission qiuz</el-breadcrumb-item>
    </el-breadcrumb> -->
    <div class="quiz">
      <!-- steps -->
      <el-steps
        :active="parseInt(activeName) - 1"
        align-center
        finish-status="success"
      >
        <el-step title="Question1"></el-step>
        <el-step title="Question2"></el-step>
        <el-step title="Question3"></el-step>
        <el-step title="Question4"></el-step>
      </el-steps>
      <!-- quiz content -->
      <div class="quizContent">
        <el-tabs
          style="height: 200px"
          tab-position="left"
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane label="Question1" name="1">
            <p>1. Do you know about "Low Carbon Life"?</p>
            <el-card>
              <el-row
                ><el-radio v-model="radio1" label="1"
                  >Never heard of that</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio1" label="2"
                  >Ever heard</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio1" label="3"
                  >Heard about it but don't care</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio1" label="4"
                  >I care a lot about it
                </el-radio></el-row
              >
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Question2" name="2" :disabled="isAvailableQ2">
            <p>
              2. Do you think low-carbon life will have a big impact on you and
              the people around you?
            </p>
            <el-card>
              <el-row
                ><el-radio v-model="radio2" label="1"
                  >I don't care</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio2" label="2"
                  >No effect at all</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio2" label="3"
                  >Yes, but not obviously</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio2" label="4"
                  >Very big
                </el-radio></el-row
              >
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Question3" name="3" :disabled="isAvailableQ3">
            <p>
              Do you choose to walk, cycle, use public transportation, or share
              bikes instead of driving?
            </p>
            <el-card>
              <el-row
                ><el-radio v-model="radio3" label="1"
                  >Never choose to walk, cycle, use public transportation, or
                  share bikes</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio3" label="2"
                  >Rarely choose to walk, cycle, use public transportation, or
                  share bikes</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio3" label="3"
                  >Occasionally choose to walk, cycle, use public
                  transportation, or share bikes</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio3" label="4"
                  >Often choose to walk, cycle, use public transportation, or
                  share bikes</el-radio
                ></el-row
              >
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Question4" name="4" :disabled="isAvailableQ4">
            <p>
              Do you care about and control the consumption of electricity,
              water, and gas in your home?
            </p>
            <el-card>
              <el-row
                ><el-radio v-model="radio4" label="1"
                  >Do not care about and control the consumption of electricity,
                  water, and gas in your home</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio4" label="2"
                  >Rarely care about and control the consumption of electricity,
                  water, and gas in your home</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio4" label="3"
                  >Occasionally care about and control the consumption of
                  electricity, water, and gas in your home</el-radio
                ></el-row
              >
              <el-row
                ><el-radio v-model="radio4" label="4"
                  >Often care about and control the consumption of electricity,
                  water, and gas in your home</el-radio
                ></el-row
              >
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="Result" name="5" :disabled="isAvailableQ5">
            <div v-if="result > 10">
              <div class="textContent">
                <h3>Congratulations, you are an excellent environmentalist!</h3>
                <p>
                  Thank you for helping the earth's environmental protection!
                  But don’t be proud, please continue to maintain this great
                  love and sense of responsibility for the world. Meanwhile, let
                  green and low carbon become your supreme labels, using the
                  power of example to spread the concept of environmental
                  protection to more people as well.
                </p>
              </div>
            </div>
            <div v-else-if="result < 10 && result > 5">
              <div class="textContent">
                <h3>Good Job! Please continue to care about our environment</h3>
                <p>
                  Generally speaking, as a person who loves life and the
                  environment who can occasionally consciously incorporate
                  environmental protection into your daily life. It is
                  recommended to maintain the existing good habits and continue
                  to learn and understand some life tips for protecting the
                  environment, includiing actively browse environmental
                  protection information and put it into action and etc.
                </p>
              </div>
            </div>
            <div v-else>
              <div class="textContent">
                <h3>
                  You need to better raise awareness of energy conservation and
                  emission reduction
                </h3>
                <p>
                  Here are some small suggestions for energy saving and emission
                  reduction: <br />
                  <br />
                  1. Try to walk for places with a short distance, and choose
                  public transportation for places with a long distance. <br />
                  2. Reduce the use of various disposable items, including
                  disposable tableware, disposable plastic bags, etc. <br />
                  3. Comply with the garbage classification rules, and divide
                  daily garbage into recyclable and non-recyclable garbage.
                  <br />
                  4. Reduce the use of chemicals. 5. If possible, support the
                  afforestation cause so as to better care for flowers and
                  trees.
                </p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-button type="success" class="nextButton" @click="handleNext">{{
        Next
      }}</el-button>
    </div>
    <div class="picContent">
      <el-row :gutter="20">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../assets/view01.jpg" alt="" /></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <p>
              As a low-cost and low-cost way of life, low-carbon life also represents a healthier, more natural and safer life.
            </p>
           
            </div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <p>
              First of all, low-carbon life helps to establish a new outlook on life and consumption, which aims to reduce carbon emissions and promote the harmonious development of man and nature.
            </p>
            
            </div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <img src="../assets/view02.jpg" alt="" />
            </div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <img src="../assets/view03.jpg" alt="" /></div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <p>
              Second, low-carbon life can better coordinate economic and social development and protect the environment.
            </p>
            </div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"
          ><div class="grid-content bg-purple">
            <p>
              In addition, under the low-carbon economic model, the negative effects caused by the irrational use of energy can be avoided, and a new life with the theme of economic energy and green energy can be enjoyed.
            </p>
            </div
        ></el-col>
        <el-col :span="12"
          ><div class="grid-content bg-purple-light">
            <img src="../assets/view04.jpg" alt="" />
            </div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      Next: "Next",
      isAvailableQ2: true,
      isAvailableQ3: true,
      isAvailableQ4: true,
      isAvailableQ5: true,
      radioList: ["radio1", "radio2", "radio3", "radio4"],
      optionList: [1, 2, 3, 4],
      radioObj: {},
      result: 0,
    };
  },
  methods: {
    handleClick(tab) {},
    handleNext() {
      let index = parseInt(this.activeName);
      let activeNameCopy = parseInt(this.activeName) + 1;
      this.activeName = activeNameCopy.toString();
      // console.log(this.activeName);
      // console.log(this.radio1);
      if (parseInt(this.activeName) <= 5) {
        switch (this.activeName) {
          case "2":
            this.isAvailableQ2 = false;
            break;
          case "3":
            this.isAvailableQ3 = false;
            break;
          case "4":
            this.isAvailableQ4 = false;
            // this.Next = "Check";
            break;
          case "5":
            this.isAvailableQ5 = false;
            break;
        }
      } else {
        this.activeName = "5";
      }

      // let value = "radio"+index
      this.radioObj["radio1"] = this.radio1;
      this.radioObj["radio2"] = this.radio2;
      this.radioObj["radio3"] = this.radio3;
      this.radioObj["radio4"] = this.radio4;

      let r = Object.values(this.radioObj);
      let sum = 0;
      for (const value of r) {
        if (!isNaN(parseInt(value))) {
          // console.log(parseInt(value));
          sum += parseInt(value);
        }
      }
      this.result = sum;
    },
  },
};
</script>

<style scoped>
.quizPage{
  background-color: #fff;
}
.grid-content p{
  margin: 20% auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  vertical-align: middle;
  font-weight: normal;
}
.picContent{
  width: 1000px;
  margin: 5% auto;
}
.picContent .el-row img {
  width: 500px;
}
.textContent p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1em;
  vertical-align: middle;
  font-weight: normal;
  
}
.picContent p:hover{
  color: #666 !important;
  cursor: pointer !important; 
}
.textContent h3 {
  margin-top: 10px;
  color: #2e8017;
}
.el-breadcrumb {
  padding: 20px;
  width: 65%;
  margin: 1% auto;
}
.quiz {
  width: 65%;
  /* height: 40px; */
  margin: 1% auto;
}
.quizContent {
  margin-top: 25px;
}
.el-row {
  margin-top: 5px;
}
.nextButton {
  margin-top: 20px;
  margin-left: 65%;
}
</style>