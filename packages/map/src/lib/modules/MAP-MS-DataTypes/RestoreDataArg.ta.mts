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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { VLR_Capability, _decode_VLR_Capability, _encode_VLR_Capability } from "../MAP-MS-DataTypes/VLR-Capability.ta.mjs";
// export { VLR_Capability, _decode_VLR_Capability, _encode_VLR_Capability } from "../MAP-MS-DataTypes/VLR-Capability.ta.mjs";


/**
 * @summary RestoreDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestoreDataArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     lmsi    LMSI    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     vlr-Capability    [6] VLR-Capability    OPTIONAL,
 *     restorationIndicator    [7]    NULL    OPTIONAL 
 *  }
 * ```
 * 
 * @class
 */
export
class RestoreDataArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: OPTIONAL<LMSI>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `vlr_Capability`.
         * @public
         * @readonly
         */
        readonly vlr_Capability: OPTIONAL<VLR_Capability>,
        /**
         * @summary `restorationIndicator`.
         * @public
         * @readonly
         */
        readonly restorationIndicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RestoreDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `RestoreDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RestoreDataArg`.
     * @returns {RestoreDataArg}
     */
    public static _from_object (_o: { [_K in keyof (RestoreDataArg)]: (RestoreDataArg)[_K] }): RestoreDataArg {
        return new RestoreDataArg(_o.imsi, _o.lmsi, _o.extensionContainer, _o.vlr_Capability, _o.restorationIndicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RestoreDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RestoreDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("lmsi", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RestoreDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RestoreDataArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RestoreDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RestoreDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("vlr-Capability", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("restorationIndicator", true, $.hasTag(_TagClass.context, 7), undefined, undefined)
];

let _cached_decoder_for_RestoreDataArg: $.ASN1Decoder<RestoreDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestoreDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RestoreDataArg (el: _Element): RestoreDataArg {
    if (!_cached_decoder_for_RestoreDataArg) { _cached_decoder_for_RestoreDataArg = function (el: _Element): RestoreDataArg {
    let imsi!: IMSI;
    let lmsi: OPTIONAL<LMSI>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let vlr_Capability: OPTIONAL<VLR_Capability>;
    let restorationIndicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "lmsi": (_el: _Element): void => { lmsi = _decode_LMSI(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "vlr-Capability": (_el: _Element): void => { vlr_Capability = $._decode_implicit<VLR_Capability>(() => _decode_VLR_Capability)(_el); },
        "restorationIndicator": (_el: _Element): void => { restorationIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RestoreDataArg,
        _extension_additions_list_spec_for_RestoreDataArg,
        _root_component_type_list_2_spec_for_RestoreDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RestoreDataArg(
        imsi,
        lmsi,
        extensionContainer,
        vlr_Capability,
        restorationIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RestoreDataArg(el);
}

let _cached_encoder_for_RestoreDataArg: $.ASN1Encoder<RestoreDataArg> | null = null;

/**
 * @summary Encodes a(n) RestoreDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestoreDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_RestoreDataArg (value: RestoreDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RestoreDataArg) { _cached_encoder_for_RestoreDataArg = function (value: RestoreDataArg, elGetter: $.ASN1Encoder<RestoreDataArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.lmsi === undefined) ? undefined : _encode_LMSI(value.lmsi, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.vlr_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_VLR_Capability, $.BER)(value.vlr_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.restorationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.restorationIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RestoreDataArg(value, elGetter);
}


/* eslint-enable */
