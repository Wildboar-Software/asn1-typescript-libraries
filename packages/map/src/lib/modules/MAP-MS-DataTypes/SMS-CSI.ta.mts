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
import { SMS_CAMEL_TDP_DataList, _decode_SMS_CAMEL_TDP_DataList, _encode_SMS_CAMEL_TDP_DataList } from "../MAP-MS-DataTypes/SMS-CAMEL-TDP-DataList.ta.mjs";
import { CamelCapabilityHandling, _decode_CamelCapabilityHandling, _encode_CamelCapabilityHandling } from "../MAP-MS-DataTypes/CamelCapabilityHandling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SMS_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-CSI ::= SEQUENCE {
 *     sms-CAMEL-TDP-DataList    [0] SMS-CAMEL-TDP-DataList    OPTIONAL,
 *     camelCapabilityHandling    [1] CamelCapabilityHandling    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     notificationToCSE    [3] NULL    OPTIONAL,
 *     csi-Active    [4] NULL    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SMS_CSI {
    constructor (
        /**
         * @summary `sms_CAMEL_TDP_DataList`.
         * @public
         * @readonly
         */
        readonly sms_CAMEL_TDP_DataList: OPTIONAL<SMS_CAMEL_TDP_DataList>,
        /**
         * @summary `camelCapabilityHandling`.
         * @public
         * @readonly
         */
        readonly camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
        /**
         * @summary `csi_Active`.
         * @public
         * @readonly
         */
        readonly csi_Active: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMS_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_CSI`.
     * @returns {SMS_CSI}
     */
    public static _from_object (_o: { [_K in keyof (SMS_CSI)]: (SMS_CSI)[_K] }): SMS_CSI {
        return new SMS_CSI(_o.sms_CAMEL_TDP_DataList, _o.camelCapabilityHandling, _o.extensionContainer, _o.notificationToCSE, _o.csi_Active, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SMS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("sms-CAMEL-TDP-DataList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("camelCapabilityHandling", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("csi-Active", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SMS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_CSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_CSI: $.ASN1Decoder<SMS_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_CSI (el: _Element): SMS_CSI {
    if (!_cached_decoder_for_SMS_CSI) { _cached_decoder_for_SMS_CSI = function (el: _Element): SMS_CSI {
    let sms_CAMEL_TDP_DataList: OPTIONAL<SMS_CAMEL_TDP_DataList> = undefined;
    let camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let notificationToCSE: OPTIONAL<NULL> = undefined;
    let csi_Active: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sms-CAMEL-TDP-DataList": (_el: _Element): void => { sms_CAMEL_TDP_DataList = $._decode_implicit<SMS_CAMEL_TDP_DataList>(() => _decode_SMS_CAMEL_TDP_DataList)(_el); },
        "camelCapabilityHandling": (_el: _Element): void => { camelCapabilityHandling = $._decode_implicit<CamelCapabilityHandling>(() => _decode_CamelCapabilityHandling)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csi-Active": (_el: _Element): void => { csi_Active = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMS_CSI,
        _extension_additions_list_spec_for_SMS_CSI,
        _root_component_type_list_2_spec_for_SMS_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMS_CSI(
        sms_CAMEL_TDP_DataList,
        camelCapabilityHandling,
        extensionContainer,
        notificationToCSE,
        csi_Active,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMS_CSI(el);
}

let _cached_encoder_for_SMS_CSI: $.ASN1Encoder<SMS_CSI> | null = null;

/**
 * @summary Encodes a(n) SMS_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_CSI (value: SMS_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_CSI) { _cached_encoder_for_SMS_CSI = function (value: SMS_CSI, elGetter: $.ASN1Encoder<SMS_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sms_CAMEL_TDP_DataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SMS_CAMEL_TDP_DataList, $.BER)(value.sms_CAMEL_TDP_DataList, $.BER)),
            /* IF_ABSENT  */ ((value.camelCapabilityHandling === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CamelCapabilityHandling, $.BER)(value.camelCapabilityHandling, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.csi_Active === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.csi_Active, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_CSI(value, elGetter);
}


/* eslint-enable */
