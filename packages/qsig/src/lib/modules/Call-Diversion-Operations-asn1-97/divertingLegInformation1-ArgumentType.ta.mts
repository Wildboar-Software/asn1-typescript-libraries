/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiversionReason, _decode_DiversionReason, _encode_DiversionReason, _enum_for_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
import { SubscriptionOption, _decode_SubscriptionOption, _encode_SubscriptionOption, _enum_for_SubscriptionOption } from "../Call-Diversion-Operations-asn1-97/SubscriptionOption.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { _decode_divertingLegInformation1_ArgumentType_extension, _encode_divertingLegInformation1_ArgumentType_extension, divertingLegInformation1_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation1-ArgumentType-extension.ta.mjs";

/**
 * @summary divertingLegInformation1_ArgumentType
 * @description
 *
 * Argument of `divertingLegInformation1`, from the Rerouteing PINX to the
 * Originating PINX (ECMA-174 §6.3.1, §6.5.4.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation1-ArgumentType ::= SEQUENCE {
 *     diversionReason DiversionReason,
 *     subscriptionOption SubscriptionOption,
 *     nominatedNr PartyNumber,
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
class divertingLegInformation1_ArgumentType {
    /**
     * @summary `diversionReason`.
     * @description
     *
     * Reason for this diversion, copied from `rerouteingReason` (ECMA-174
     * §6.5.4.1). A further `cfu` or `cfb` is not notified to the calling user;
     * a further `cfnr` may be (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly diversionReason: DiversionReason;
    /**
     * @summary `subscriptionOption`.
     * @description
     *
     * Served user's notification choice, copied from `callRerouteing` (ECMA-174
     * §6.5.4.1). `noNotification` suppresses notification of diversion to the
     * calling user. Any earlier `noNotification` on this call also suppresses a
     * later CFNR notification (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly subscriptionOption: SubscriptionOption;
    /**
     * @summary `nominatedNr`.
     * @description
     *
     * Diverted-to number, taken from `calledAddress` of `callRerouteing`
     * (ECMA-174 §6.5.4.1). Not presented to the calling user until
     * `divertingLegInformation3`, and only when the conditions in §6.5.1.1 are
     * met.
     * @public
     * @readonly
     */
    readonly nominatedNr: PartyNumber;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `DiversionExtensionSet`. The
     * standardized set is empty (ECMA-174 §6.3.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<divertingLegInformation1_ArgumentType_extension>;

    constructor (
        diversionReason: DiversionReason,
        subscriptionOption: SubscriptionOption,
        nominatedNr: PartyNumber,
        extension: OPTIONAL<divertingLegInformation1_ArgumentType_extension>
    ) {
        this.diversionReason = diversionReason;
        this.subscriptionOption = subscriptionOption;
        this.nominatedNr = nominatedNr;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a divertingLegInformation1_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `divertingLegInformation1_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `divertingLegInformation1_ArgumentType`.
     * @returns {divertingLegInformation1_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (divertingLegInformation1_ArgumentType)]: (divertingLegInformation1_ArgumentType)[_K] }): divertingLegInformation1_ArgumentType {
        return new divertingLegInformation1_ArgumentType(_o.diversionReason, _o.subscriptionOption, _o.nominatedNr, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `diversionReason`
         * @public
         * @static
         */

    public static _enum_for_diversionReason = _enum_for_DiversionReason;        /**
         * @summary The enum used as the type of the component `subscriptionOption`
         * @public
         * @static
         */

    public static _enum_for_subscriptionOption = _enum_for_SubscriptionOption;
}

/**
 * @summary The Leading Root Component Types of divertingLegInformation1_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_divertingLegInformation1_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("diversionReason", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("subscriptionOption", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("nominatedNr", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10)))
];

/**
 * @summary The Trailing Root Component Types of divertingLegInformation1_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_divertingLegInformation1_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of divertingLegInformation1_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_divertingLegInformation1_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_divertingLegInformation1_ArgumentType: $.ASN1Decoder<divertingLegInformation1_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) divertingLegInformation1_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_divertingLegInformation1_ArgumentType (el: _Element): divertingLegInformation1_ArgumentType {
    if (!_cached_decoder_for_divertingLegInformation1_ArgumentType) { _cached_decoder_for_divertingLegInformation1_ArgumentType = function (el: _Element): divertingLegInformation1_ArgumentType {
    let diversionReason!: DiversionReason;
    let subscriptionOption!: SubscriptionOption;
    let nominatedNr!: PartyNumber;
    let extension: OPTIONAL<divertingLegInformation1_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "diversionReason": (_el: _Element): void => { diversionReason = _decode_DiversionReason(_el); },
        "subscriptionOption": (_el: _Element): void => { subscriptionOption = _decode_SubscriptionOption(_el); },
        "nominatedNr": (_el: _Element): void => { nominatedNr = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_divertingLegInformation1_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_divertingLegInformation1_ArgumentType,
        _extension_additions_list_spec_for_divertingLegInformation1_ArgumentType,
        _root_component_type_list_2_spec_for_divertingLegInformation1_ArgumentType,
        undefined,
    );
    return new divertingLegInformation1_ArgumentType(
        diversionReason,
        subscriptionOption,
        nominatedNr,
        extension
    );
}; }
    return _cached_decoder_for_divertingLegInformation1_ArgumentType(el);
}

let _cached_encoder_for_divertingLegInformation1_ArgumentType: $.ASN1Encoder<divertingLegInformation1_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) divertingLegInformation1_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The divertingLegInformation1_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_divertingLegInformation1_ArgumentType (value: divertingLegInformation1_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_divertingLegInformation1_ArgumentType) { _cached_encoder_for_divertingLegInformation1_ArgumentType = function (value: divertingLegInformation1_ArgumentType, _elGetter: $.ASN1Encoder<divertingLegInformation1_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DiversionReason(value.diversionReason, $.BER));
    _components.push(/* REQUIRED   */ _encode_SubscriptionOption(value.subscriptionOption, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.nominatedNr, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_divertingLegInformation1_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_divertingLegInformation1_ArgumentType(value, elGetter);
}

/* eslint-enable */
