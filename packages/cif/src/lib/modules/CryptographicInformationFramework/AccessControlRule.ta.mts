/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessMode, _decode_AccessMode, _encode_AccessMode } from "../CryptographicInformationFramework/AccessMode.ta.mjs";
import { SecurityCondition, _decode_SecurityCondition, _encode_SecurityCondition } from "../CryptographicInformationFramework/SecurityCondition.ta.mjs";
import { CommunicationMode, _decode_CommunicationMode, _encode_CommunicationMode } from "../CryptographicInformationFramework/CommunicationMode.ta.mjs";
import { LifeCycleStatus, _enum_for_LifeCycleStatus, _decode_LifeCycleStatus, _encode_LifeCycleStatus } from "../CryptographicInformationFramework/LifeCycleStatus.ta.mjs";
import { RangeOfDate, _decode_RangeOfDate, _encode_RangeOfDate } from "../CryptographicInformationFramework/RangeOfDate.ta.mjs";


/**
 * @summary AccessControlRule
 * @description
 * 
 * One host-visible access-control statement for a CIO. Omit a rule entirely to
 * forbid that access mode. Optional `communicationMode` and `lifeCycleStatus`
 * scope the rule to an interface and LCS. ISO/IEC 7816-15:2016 §8.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlRule ::= SEQUENCE {
 *     accessMode           AccessMode,
 *     securityCondition    SecurityCondition,
 *     communicationMode    CommunicationMode OPTIONAL,
 *     lifeCycleStatus      LifeCycleStatus OPTIONAL,
 *     verifLimitDates      RangeOfDate OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class AccessControlRule {
    constructor (
        /**
         * @summary `accessMode`.
         * @description
         * Which operations this rule covers. ISO/IEC 7816-15:2016 §8.2.8.
         * @public
         * @readonly
         */
        readonly accessMode: AccessMode,
        /**
         * @summary `securityCondition`.
         * @description
         * Boolean expression over authentication methods. ISO/IEC 7816-15:2016
         * §8.2.8.
         * @public
         * @readonly
         */
        readonly securityCondition: SecurityCondition,
        /**
         * @summary `communicationMode`.
         * @description
         * Physical interface to which the rule applies (ISO/IEC 7816-4
         * transport type descriptor). ISO/IEC 7816-15:2016 §8.2.8.
         * @public
         * @readonly
         */
        readonly communicationMode: OPTIONAL<CommunicationMode>,
        /**
         * @summary `lifeCycleStatus`.
         * @description
         * File/DO life-cycle state to which the rule applies (ISO/IEC 7816-4).
         * ISO/IEC 7816-15:2016 §8.2.8.
         * @public
         * @readonly
         */
        readonly lifeCycleStatus: OPTIONAL<LifeCycleStatus>,
        /**
         * @summary `verifLimitDates`.
         * @description
         * Interval during which this rule may be verified; outside it the rule
         * cannot be verified. May be used with a trusted timestamp presented to
         * the card. ISO/IEC 7816-15:2016 §8.2.8.
         * @public
         * @readonly
         */
        readonly verifLimitDates: OPTIONAL<RangeOfDate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessControlRule
     * @description
     * 
     * This takes an `object` and converts it to a `AccessControlRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlRule`.
     * @returns {AccessControlRule}
     */
    public static _from_object (_o: { [_K in keyof (AccessControlRule)]: (AccessControlRule)[_K] }): AccessControlRule {
        return new AccessControlRule(_o.accessMode, _o.securityCondition, _o.communicationMode, _o.lifeCycleStatus, _o.verifLimitDates, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lifeCycleStatus`
         * @public
         * @static
         */

    public static _enum_for_lifeCycleStatus = _enum_for_LifeCycleStatus;
}

/**
 * @summary The Leading Root Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessControlRule: $.ComponentSpec[] = [
    new $.ComponentSpec("accessMode", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("securityCondition", false, $.hasAnyTag),
    new $.ComponentSpec("communicationMode", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("lifeCycleStatus", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("verifLimitDates", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessControlRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessControlRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessControlRule: $.ASN1Decoder<AccessControlRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlRule (el: _Element): AccessControlRule {
    if (!_cached_decoder_for_AccessControlRule) { _cached_decoder_for_AccessControlRule = function (el: _Element): AccessControlRule {
    let accessMode!: AccessMode;
    let securityCondition!: SecurityCondition;
    let communicationMode: OPTIONAL<CommunicationMode>;
    let lifeCycleStatus: OPTIONAL<LifeCycleStatus>;
    let verifLimitDates: OPTIONAL<RangeOfDate>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessMode": (_el: _Element): void => { accessMode = _decode_AccessMode(_el); },
        "securityCondition": (_el: _Element): void => { securityCondition = _decode_SecurityCondition(_el); },
        "communicationMode": (_el: _Element): void => { communicationMode = _decode_CommunicationMode(_el); },
        "lifeCycleStatus": (_el: _Element): void => { lifeCycleStatus = _decode_LifeCycleStatus(_el); },
        "verifLimitDates": (_el: _Element): void => { verifLimitDates = _decode_RangeOfDate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessControlRule,
        _extension_additions_list_spec_for_AccessControlRule,
        _root_component_type_list_2_spec_for_AccessControlRule,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AccessControlRule(
        accessMode,
        securityCondition,
        communicationMode,
        lifeCycleStatus,
        verifLimitDates,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AccessControlRule(el);
}

let _cached_encoder_for_AccessControlRule: $.ASN1Encoder<AccessControlRule> | null = null;

/**
 * @summary Encodes a(n) AccessControlRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRule, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlRule (value: AccessControlRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlRule) { _cached_encoder_for_AccessControlRule = function (value: AccessControlRule): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessMode(value.accessMode, $.BER),
            /* REQUIRED   */ _encode_SecurityCondition(value.securityCondition, $.BER),
            /* IF_ABSENT  */ ((value.communicationMode === undefined) ? undefined : _encode_CommunicationMode(value.communicationMode, $.BER)),
            /* IF_ABSENT  */ ((value.lifeCycleStatus === undefined) ? undefined : _encode_LifeCycleStatus(value.lifeCycleStatus, $.BER)),
            /* IF_ABSENT  */ ((value.verifLimitDates === undefined) ? undefined : _encode_RangeOfDate(value.verifLimitDates, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessControlRule(value, elGetter);
}


/* eslint-enable */
