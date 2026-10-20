/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiversionReason, _decode_DiversionReason, _encode_DiversionReason, _enum_for_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
// export { DiversionReason, _enum_for_DiversionReason, DiversionReason_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfu /* IMPORTED_LONG_ENUMERATION_ITEM */, cfu /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfb /* IMPORTED_LONG_ENUMERATION_ITEM */, cfb /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfnr /* IMPORTED_LONG_ENUMERATION_ITEM */, cfnr /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DiversionReason, _encode_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
// export { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
// export { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { SubscriptionOption, _decode_SubscriptionOption, _encode_SubscriptionOption, _enum_for_SubscriptionOption } from "../Call-Diversion-Operations-asn1-97/SubscriptionOption.ta.mjs";
// export { SubscriptionOption, _enum_for_SubscriptionOption, SubscriptionOption_noNotification /* IMPORTED_LONG_ENUMERATION_ITEM */, noNotification /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionOption_notificationWithoutDivertedToNr /* IMPORTED_LONG_ENUMERATION_ITEM */, notificationWithoutDivertedToNr /* IMPORTED_SHORT_ENUMERATION_ITEM */, SubscriptionOption_notificationWithDivertedToNr /* IMPORTED_LONG_ENUMERATION_ITEM */, notificationWithDivertedToNr /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SubscriptionOption, _encode_SubscriptionOption } from "../Call-Diversion-Operations-asn1-97/SubscriptionOption.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
// export { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
// export { PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { _decode_callRerouteing_ArgumentType_extension, _encode_callRerouteing_ArgumentType_extension, callRerouteing_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/callRerouteing-ArgumentType-extension.ta.mjs";
// export { callRerouteing_ArgumentType_extension, _decode_callRerouteing_ArgumentType_extension, _encode_callRerouteing_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/callRerouteing-ArgumentType-extension.ta.mjs";


/**
 * @summary callRerouteing_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callRerouteing-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class callRerouteing_ArgumentType {
    /**
     * @summary `rerouteingReason`.
     * @public
     * @readonly
     */
    readonly rerouteingReason: DiversionReason;
    /**
     * @summary `originalRerouteingReason`.
     * @public
     * @readonly
     */
    readonly originalRerouteingReason: OPTIONAL<DiversionReason>;
    /**
     * @summary `calledAddress`.
     * @public
     * @readonly
     */
    readonly calledAddress: Address;
    /**
     * @summary `diversionCounter`.
     * @public
     * @readonly
     */
    readonly diversionCounter: INTEGER;
    /**
     * @summary `pSS1InfoElement`.
     * @public
     * @readonly
     */
    readonly pSS1InfoElement: PSS1InformationElement;
    /**
     * @summary `lastRerouteingNr`.
     * @public
     * @readonly
     */
    readonly lastRerouteingNr: PresentedNumberUnscreened;
    /**
     * @summary `subscriptionOption`.
     * @public
     * @readonly
     */
    readonly subscriptionOption: SubscriptionOption;
    /**
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<PartySubaddress>;
    /**
     * @summary `callingNumber`.
     * @public
     * @readonly
     */
    readonly callingNumber: PresentedNumberScreened;
    /**
     * @summary `callingName`.
     * @public
     * @readonly
     */
    readonly callingName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledNr`.
     * @public
     * @readonly
     */
    readonly originalCalledNr: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `redirectingName`.
     * @public
     * @readonly
     */
    readonly redirectingName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledName`.
     * @public
     * @readonly
     */
    readonly originalCalledName: OPTIONAL<Name>;
    /**
     * @summary `extension`.
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
        callingName: OPTIONAL<Name>,
        originalCalledNr: OPTIONAL<PresentedNumberUnscreened>,
        redirectingName: OPTIONAL<Name>,
        originalCalledName: OPTIONAL<Name>,
        extension: OPTIONAL<callRerouteing_ArgumentType_extension>
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
    if (!_cached_encoder_for_callRerouteing_ArgumentType) { _cached_encoder_for_callRerouteing_ArgumentType = function (value: callRerouteing_ArgumentType, elGetter: $.ASN1Encoder<callRerouteing_ArgumentType>): _Element {
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
