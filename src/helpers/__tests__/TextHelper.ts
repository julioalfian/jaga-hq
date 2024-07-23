import {expect, test} from "@jest/globals"
import {TextHelper} from "../TextHelper";

const helper = new TextHelper()
describe("capitalize text", () => {
    test("from sample to Sample", () => {
        expect(helper.toCapitalize("sample")).toEqual("Sample")
    })
    test("from hero to Hero", () => {
        expect(helper.toCapitalize("home")).toBe("Home")
    })
    test("empty string", () => {
        expect(helper.toCapitalize("")).toEqual("-")
    })
})