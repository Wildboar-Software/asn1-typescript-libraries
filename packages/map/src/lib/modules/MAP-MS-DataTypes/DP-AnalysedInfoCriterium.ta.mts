/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { DefaultCallHandling, _enum_for_DefaultCallHandling, DefaultCallHandling_continueCall /* IMPORTED_LONG_ENUMERATION_ITEM */, continueCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, DefaultCallHandling_releaseCall /* IMPORTED_LONG_ENUMERATION_ITEM */, releaseCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DefaultCallHandling, _encode_DefaultCallHandling } from "../MAP-MS-DataTypes/DefaultCallHandling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary DP_AnalysedInfoCriterium
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DP-AnalysedInfoCriterium ::= SEQUENCE {
 *     dialledNumber    ISDN-AddressString,
 *     serviceKey    ServiceKey,
 *     gsmSCF-Address    ISDN-AddressString,
 *     defaultCallHandling    DefaultCallHandling,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class DP_AnalysedInfoCriterium {
    constructor (
        /**
         * @summary `dialledNumber`.
         * @public
         * @readonly
         */
        readonly dialledNumber: ISDN_AddressString,
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `gsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `defaultCallHandling`.
         * @public
         * @readonly
         */
        readonly defaultCallHandling: DefaultCallHandling,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DP_AnalysedInfoCriterium
     * @description
     * 
     * This takes an `object` and converts it to a `DP_AnalysedInfoCriterium`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DP_AnalysedInfoCriterium`.
     * @returns {DP_AnalysedInfoCriterium}
     */
    public static _from_object (_o: { [_K in keyof (DP_AnalysedInfoCriterium)]: (DP_AnalysedInfoCriterium)[_K] }): DP_AnalysedInfoCriterium {
        return new DP_AnalysedInfoCriterium(_o.dialledNumber, _o.serviceKey, _o.gsmSCF_Address, _o.defaultCallHandling, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `defaultCallHandling`
         * @public
         * @static
         */

    public static _enum_for_defaultCallHandling = _enum_for_DefaultCallHandling;
}

/**
 * @summary The Leading Root Component Types of DP_AnalysedInfoCriterium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DP_AnalysedInfoCriterium: $.ComponentSpec[] = [
    new $.ComponentSpec("dialledNumber", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("gsmSCF-Address", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("defaultCallHandling", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DP_AnalysedInfoCriterium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DP_AnalysedInfoCriterium: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DP_AnalysedInfoCriterium
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DP_AnalysedInfoCriterium: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DP_AnalysedInfoCriterium: $.ASN1Decoder<DP_AnalysedInfoCriterium> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DP_AnalysedInfoCriterium
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DP_AnalysedInfoCriterium (el: _Element): DP_AnalysedInfoCriterium {
    if (!_cached_decoder_for_DP_AnalysedInfoCriterium) { _cached_decoder_for_DP_AnalysedInfoCriterium = function (el: _Element): DP_AnalysedInfoCriterium {
    let dialledNumber!: ISDN_AddressString;
    let serviceKey!: ServiceKey;
    let gsmSCF_Address!: ISDN_AddressString;
    let defaultCallHandling!: DefaultCallHandling;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dialledNumber": (_el: _Element): void => { dialledNumber = _decode_ISDN_AddressString(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = _decode_ServiceKey(_el); },
        "gsmSCF-Address": (_el: _Element): void => { gsmSCF_Address = _decode_ISDN_AddressString(_el); },
        "defaultCallHandling": (_el: _Element): void => { defaultCallHandling = _decode_DefaultCallHandling(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DP_AnalysedInfoCriterium,
        _extension_additions_list_spec_for_DP_AnalysedInfoCriterium,
        _root_component_type_list_2_spec_for_DP_AnalysedInfoCriterium,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DP_AnalysedInfoCriterium(
        dialledNumber,
        serviceKey,
        gsmSCF_Address,
        defaultCallHandling,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DP_AnalysedInfoCriterium(el);
}

let _cached_encoder_for_DP_AnalysedInfoCriterium: $.ASN1Encoder<DP_AnalysedInfoCriterium> | null = null;

/**
 * @summary Encodes a(n) DP_AnalysedInfoCriterium into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DP_AnalysedInfoCriterium, encoded as an ASN.1 Element.
 */
export
function _encode_DP_AnalysedInfoCriterium (value: DP_AnalysedInfoCriterium, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DP_AnalysedInfoCriterium) { _cached_encoder_for_DP_AnalysedInfoCriterium = function (value: DP_AnalysedInfoCriterium, elGetter: $.ASN1Encoder<DP_AnalysedInfoCriterium>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.dialledNumber, $.BER),
            /* REQUIRED   */ _encode_ServiceKey(value.serviceKey, $.BER),
            /* REQUIRED   */ _encode_ISDN_AddressString(value.gsmSCF_Address, $.BER),
            /* REQUIRED   */ _encode_DefaultCallHandling(value.defaultCallHandling, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DP_AnalysedInfoCriterium(value, elGetter);
}


/* eslint-enable */
