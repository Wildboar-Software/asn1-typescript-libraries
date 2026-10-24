/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiversionReason, _decode_DiversionReason, _encode_DiversionReason, _enum_for_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { type PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { type PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { SubscriptionOption, _decode_SubscriptionOption, _encode_SubscriptionOption, _enum_for_SubscriptionOption } from "../Call-Diversion-Operations-asn1-97/SubscriptionOption.ta.mjs";
import { type PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { type PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { _decode_callRerouteing_ArgumentType_extension, _encode_callRerouteing_ArgumentType_extension, type callRerouteing_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/callRerouteing-ArgumentType-extension.ta.mjs";

/**
 * @summary callRerouteing_ArgumentType
 * @description
 *
 * Argument of `callRerouteing`, from the Served User PINX to the Rerouteing
 * PINX (ECMA-174 §6.3.1, §6.5.3.1.5).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callRerouteing-ArgumentType ::= SEQUENCE {
 *     rerouteingReason DiversionReason,
 *     originalRerouteingReason [0] IMPLICIT DiversionReason OPTIONAL,
 *     calledAddress Address,
 *     diversionCounter INTEGER (1..15),
 *     pSS1InfoElement PSS1InformationElement,
 *     -- The basic call information elements Bearer capability, High layer compatibility, Low
 *     -- layer compatibity and Progress indicator can be embedded in the
 *     -- pSS1InfoElement in accordance with 6.5.3.1.5.
 *     lastRerouteingNr [1] PresentedNumberUnscreened,
 *     subscriptionOption [2] IMPLICIT SubscriptionOption,
 *     callingPartySubaddress [3] PartySubaddress OPTIONAL,
 *     callingNumber [4] PresentedNumberScreened,
 *     callingName [5] Name OPTIONAL,
 *     originalCalledNr [6] PresentedNumberUnscreened OPTIONAL,
 *     redirectingName [7] Name OPTIONAL,
 *     originalCalledName [8] Name OPTIONAL,
 *     extension CHOICE {
 *         single [9] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [10] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class callRerouteing_ArgumentType {
    /**
     * @summary `rerouteingReason`.
     * @description
     *
     * Reason for this diversion. The Served User PINX sends a value other than
     * `unknown` (ECMA-174 §6.5.3.1.5). It tells the Rerouteing PINX whether to
     * follow the CFU/CFB procedure or the CFNR procedure (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly rerouteingReason: DiversionReason;
    /**
     * @summary `originalRerouteingReason`.
     * @description
     *
     * Reason for the original diversion. Included only when the call has
     * already been diverted (ECMA-174 §6.5.3.1.5). Copied to
     * `originalDiversionReason` of `divertingLegInformation2`.
     * @public
     * @readonly
     */
    readonly originalRerouteingReason: OPTIONAL<DiversionReason>;
    /**
     * @summary `calledAddress`.
     * @description
     *
     * Diverted-to number, and subaddress if stored, at the Served User PINX
     * (ECMA-174 §6.5.3.1.5). It becomes the called-party number of the new
     * SETUP, and the called-party subaddress when a subaddress is present
     * (§6.5.4.1). The Standard notes that the number should be significant
     * throughout the PISN: a private numbering plan number should be complete,
     * and an E.164 subscriber number, sometimes even a national number, can be
     * insufficient.
     * @public
     * @readonly
     */
    readonly calledAddress: Address;
    /**
     * @summary `diversionCounter`.
     * @description
     *
     * How many diversions this call has undergone, 1 for the first. The
     * encoding range is 1 to 15 (ECMA-174 §6.3.1, §6.5.3.1.5). The service
     * limit is a separate implementation option and counts every type of
     * diversion (§6.1).
     * @public
     * @readonly
     */
    readonly diversionCounter: INTEGER;
    /**
     * @summary `pSS1InfoElement`.
     * @description
     *
     * Bearer capability from the incoming SETUP, plus any high-layer
     * compatibility, low-layer compatibility, and progress indicator received
     * in that SETUP (ECMA-174 §6.5.3.1.5). Those elements are placed in the new
     * SETUP (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly pSS1InfoElement: PSS1InformationElement;
    /**
     * @summary `lastRerouteingNr`.
     * @description
     *
     * Number of the last diverting user (ECMA-174 §4.2.10, §6.5.3.1.5). Copied
     * to `divertingNr` of `divertingLegInformation2`.
     * @public
     * @readonly
     */
    readonly lastRerouteingNr: PresentedNumberUnscreened;
    /**
     * @summary `subscriptionOption`.
     * @description
     *
     * Served user's choice for notifying the calling user (ECMA-174
     * §6.5.3.1.5). Copied to `divertingLegInformation1`.
     * @public
     * @readonly
     */
    readonly subscriptionOption: SubscriptionOption;
    /**
     * @summary `callingPartySubaddress`.
     * @description
     *
     * Calling-party subaddress from the incoming SETUP, included when that
     * information element was received (ECMA-174 §6.5.3.1.5). Placed in the
     * calling-party subaddress of the new SETUP (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<PartySubaddress>;
    /**
     * @summary `callingNumber`.
     * @description
     *
     * Calling-party number from the incoming SETUP (ECMA-174 §6.5.3.1.5).
     * Placed in the calling-party number of the new SETUP (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly callingNumber: PresentedNumberScreened;
    /**
     * @summary `callingName`.
     * @description
     *
     * Calling name from a `callingName` invoke in the incoming SETUP, included
     * when the Served User PINX recognised that APDU (ECMA-174 §6.5.3.1.5,
     * citing ECMA-164). The Rerouteing PINX may send `callingName` in the new
     * SETUP when this element was received and name identification is supported
     * (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly callingName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledNr`.
     * @description
     *
     * Number of the original called user (user B, or B1 when diversion is
     * multiple). Included only for multiple diversion (ECMA-174 §4.2.15,
     * §6.5.3.1.5).
     * @public
     * @readonly
     */
    readonly originalCalledNr: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `redirectingName`.
     * @description
     *
     * Optional. The Rerouteing PINX may copy it into
     * `divertingLegInformation2`, and the Diverted-to PINX may present a
     * redirecting name to the called user (ECMA-174 §6.5.3.1.5, §6.5.4.1,
     * §6.5.5.1.1). Stage 1 allows the diverted-to user to receive the served
     * user's name and, on multiple diversion, the last diverting user's name
     * (ECMA-173 §6.2.2.2.2). The protocol does not say which of those names
     * this element carries, as opposed to `originalCalledName`.
     * @public
     * @readonly
     */
    readonly redirectingName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledName`.
     * @description
     *
     * Optional name associated with the original called user. Included at the
     * Served User PINX's choice and copied onward only if received (ECMA-174
     * §6.5.3.1.5, §6.5.4.1). The protocol does not define its contents beyond
     * the element name. Stage 1 allows the original called user's name on
     * multiple diversion (ECMA-173 §6.2.2.2.2).
     * @public
     * @readonly
     */
    readonly originalCalledName: OPTIONAL<Name>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `DiversionExtensionSet`. The
     * standardized set is empty (ECMA-174 §6.3.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<callRerouteing_ArgumentType_extension>;

    constructor (
        rerouteingReason: DiversionReason,
        originalRerouteingReason: OPTIONAL<DiversionReason>,
        calledAddress: Address,
        diversionCounter: INTEGER,
        pSS1InfoElement: PSS1InformationElement,
        lastRerouteingNr: PresentedNumberUnscreened,
        subscriptionOption: SubscriptionOption,
        callingPartySubaddress: OPTIONAL<PartySubaddress>,
        callingNumber: PresentedNumberScreened,
        callingName?: OPTIONAL<Name>,
        originalCalledNr?: OPTIONAL<PresentedNumberUnscreened>,
        redirectingName?: OPTIONAL<Name>,
        originalCalledName?: OPTIONAL<Name>,
        extension?: OPTIONAL<callRerouteing_ArgumentType_extension>
    ) {
        this.rerouteingReason = rerouteingReason;
        this.originalRerouteingReason = originalRerouteingReason;
        this.calledAddress = calledAddress;
        this.diversionCounter = diversionCounter;
        this.pSS1InfoElement = pSS1InfoElement;
        this.lastRerouteingNr = lastRerouteingNr;
        this.subscriptionOption = subscriptionOption;
        this.callingPartySubaddress = callingPartySubaddress;
        this.callingNumber = callingNumber;
        this.callingName = callingName;
        this.originalCalledNr = originalCalledNr;
        this.redirectingName = redirectingName;
        this.originalCalledName = originalCalledName;
        this.extension = extension;
    
        if ((typeof diversionCounter === "bigint" ? (diversionCounter < 1n || diversionCounter > 15n) : (diversionCounter < 1 || diversionCounter > 15))) {
            throw new ASN1OverflowError("callRerouteing_ArgumentType.diversionCounter violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a callRerouteing_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `callRerouteing_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `callRerouteing_ArgumentType`.
     * @returns {callRerouteing_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (callRerouteing_ArgumentType)]: (callRerouteing_ArgumentType)[_K] }): callRerouteing_ArgumentType {
        return new callRerouteing_ArgumentType(_o.rerouteingReason, _o.originalRerouteingReason, _o.calledAddress, _o.diversionCounter, _o.pSS1InfoElement, _o.lastRerouteingNr, _o.subscriptionOption, _o.callingPartySubaddress, _o.callingNumber, _o.callingName, _o.originalCalledNr, _o.redirectingName, _o.originalCalledName, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `rerouteingReason`
         * @public
         * @static
         */

    public static _enum_for_rerouteingReason = _enum_for_DiversionReason;        /**
         * @summary The enum used as the type of the component `originalRerouteingReason`
         * @public
         * @static
         */

    public static _enum_for_originalRerouteingReason = _enum_for_DiversionReason;        /**
         * @summary The enum used as the type of the component `subscriptionOption`
         * @public
         * @static
         */

    public static _enum_for_subscriptionOption = _enum_for_SubscriptionOption;
}

/**
 * @summary The Leading Root Component Types of callRerouteing_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_callRerouteing_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("rerouteingReason", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("originalRerouteingReason", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledAddress", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("diversionCounter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("pSS1InfoElement", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("lastRerouteingNr", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("subscriptionOption", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingNumber", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingName", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("originalCalledNr", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectingName", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("originalCalledName", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10)))
];

/**
 * @summary The Trailing Root Component Types of callRerouteing_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_callRerouteing_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of callRerouteing_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_callRerouteing_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_callRerouteing_ArgumentType: $.ASN1Decoder<callRerouteing_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) callRerouteing_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_callRerouteing_ArgumentType (el: _Element): callRerouteing_ArgumentType {
    if (!_cached_decoder_for_callRerouteing_ArgumentType) { _cached_decoder_for_callRerouteing_ArgumentType = function (el: _Element): callRerouteing_ArgumentType {
    let rerouteingReason!: DiversionReason;
    let originalRerouteingReason: OPTIONAL<DiversionReason>;
    let calledAddress!: Address;
    let diversionCounter!: INTEGER;
    let pSS1InfoElement!: PSS1InformationElement;
    let lastRerouteingNr!: PresentedNumberUnscreened;
    let subscriptionOption!: SubscriptionOption;
    let callingPartySubaddress: OPTIONAL<PartySubaddress>;
    let callingNumber!: PresentedNumberScreened;
    let callingName: OPTIONAL<Name>;
    let originalCalledNr: OPTIONAL<PresentedNumberUnscreened>;
    let redirectingName: OPTIONAL<Name>;
    let originalCalledName: OPTIONAL<Name>;
    let extension: OPTIONAL<callRerouteing_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "rerouteingReason": (_el: _Element): void => { rerouteingReason = _decode_DiversionReason(_el); },
        "originalRerouteingReason": (_el: _Element): void => { originalRerouteingReason = $._decode_implicit<DiversionReason>(() => _decode_DiversionReason)(_el); },
        "calledAddress": (_el: _Element): void => { calledAddress = _decode_Address(_el); },
        "diversionCounter": (_el: _Element): void => { diversionCounter = $._decodeInteger(_el); },
        "pSS1InfoElement": (_el: _Element): void => { pSS1InfoElement = _decode_PSS1InformationElement(_el); },
        "lastRerouteingNr": (_el: _Element): void => { lastRerouteingNr = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "subscriptionOption": (_el: _Element): void => { subscriptionOption = $._decode_implicit<SubscriptionOption>(() => _decode_SubscriptionOption)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_explicit<PartySubaddress>(() => _decode_PartySubaddress)(_el); },
        "callingNumber": (_el: _Element): void => { callingNumber = $._decode_explicit<PresentedNumberScreened>(() => _decode_PresentedNumberScreened)(_el); },
        "callingName": (_el: _Element): void => { callingName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "originalCalledNr": (_el: _Element): void => { originalCalledNr = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "redirectingName": (_el: _Element): void => { redirectingName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "originalCalledName": (_el: _Element): void => { originalCalledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_callRerouteing_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_callRerouteing_ArgumentType,
        _extension_additions_list_spec_for_callRerouteing_ArgumentType,
        _root_component_type_list_2_spec_for_callRerouteing_ArgumentType,
        undefined,
    );
    return new callRerouteing_ArgumentType(
        rerouteingReason,
        originalRerouteingReason,
        calledAddress,
        diversionCounter,
        pSS1InfoElement,
        lastRerouteingNr,
        subscriptionOption,
        callingPartySubaddress,
        callingNumber,
        callingName,
        originalCalledNr,
        redirectingName,
        originalCalledName,
        extension
    );
}; }
    return _cached_decoder_for_callRerouteing_ArgumentType(el);
}

let _cached_encoder_for_callRerouteing_ArgumentType: $.ASN1Encoder<callRerouteing_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) callRerouteing_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The callRerouteing_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_callRerouteing_ArgumentType (value: callRerouteing_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_callRerouteing_ArgumentType) { _cached_encoder_for_callRerouteing_ArgumentType = function (value: callRerouteing_ArgumentType, _elGetter: $.ASN1Encoder<callRerouteing_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DiversionReason(value.rerouteingReason, $.BER));
    if (value.originalRerouteingReason !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DiversionReason, $.BER)(value.originalRerouteingReason, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_Address(value.calledAddress, $.BER));
    _components.push(/* REQUIRED   */ $._encodeInteger(value.diversionCounter, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.pSS1InfoElement, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberUnscreened, $.BER)(value.lastRerouteingNr, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SubscriptionOption, $.BER)(value.subscriptionOption, $.BER));
    if (value.callingPartySubaddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PartySubaddress, $.BER)(value.callingPartySubaddress, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_PresentedNumberScreened, $.BER)(value.callingNumber, $.BER));
    if (value.callingName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_Name, $.BER)(value.callingName, $.BER));
    }
    if (value.originalCalledNr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_PresentedNumberUnscreened, $.BER)(value.originalCalledNr, $.BER));
    }
    if (value.redirectingName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_Name, $.BER)(value.redirectingName, $.BER));
    }
    if (value.originalCalledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_Name, $.BER)(value.originalCalledName, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_callRerouteing_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_callRerouteing_ArgumentType(value, elGetter);
}

/* eslint-enable */
