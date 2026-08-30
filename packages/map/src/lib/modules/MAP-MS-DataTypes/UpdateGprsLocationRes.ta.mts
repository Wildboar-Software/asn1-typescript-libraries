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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UpdateGprsLocationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGprsLocationRes ::= SEQUENCE {
 *     hlr-Number    ISDN-AddressString,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     add-Capability    NULL    OPTIONAL,
 *     sgsn-mmeSeparationSupported    [0] NULL    OPTIONAL,
 *     mmeRegisteredforSMS    [1] NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class UpdateGprsLocationRes {
    constructor (
        /**
         * @summary `hlr_Number`.
         * @public
         * @readonly
         */
        readonly hlr_Number: ISDN_AddressString,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `add_Capability`.
         * @public
         * @readonly
         */
        readonly add_Capability: OPTIONAL<NULL>,
        /**
         * @summary `sgsn_mmeSeparationSupported`.
         * @public
         * @readonly
         */
        readonly sgsn_mmeSeparationSupported: OPTIONAL<NULL>,
        /**
         * @summary `mmeRegisteredforSMS`.
         * @public
         * @readonly
         */
        readonly mmeRegisteredforSMS: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateGprsLocationRes
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGprsLocationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGprsLocationRes`.
     * @returns {UpdateGprsLocationRes}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGprsLocationRes)]: (UpdateGprsLocationRes)[_K] }): UpdateGprsLocationRes {
        return new UpdateGprsLocationRes(_o.hlr_Number, _o.extensionContainer, _o.add_Capability, _o.sgsn_mmeSeparationSupported, _o.mmeRegisteredforSMS, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateGprsLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGprsLocationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("hlr-Number", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of UpdateGprsLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGprsLocationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGprsLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGprsLocationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("add-Capability", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("sgsn-mmeSeparationSupported", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mmeRegisteredforSMS", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_UpdateGprsLocationRes: $.ASN1Decoder<UpdateGprsLocationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGprsLocationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGprsLocationRes (el: _Element): UpdateGprsLocationRes {
    if (!_cached_decoder_for_UpdateGprsLocationRes) { _cached_decoder_for_UpdateGprsLocationRes = function (el: _Element): UpdateGprsLocationRes {
    let hlr_Number!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let add_Capability: OPTIONAL<NULL> = undefined;
    let sgsn_mmeSeparationSupported: OPTIONAL<NULL> = undefined;
    let mmeRegisteredforSMS: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hlr-Number": (_el: _Element): void => { hlr_Number = _decode_ISDN_AddressString(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "add-Capability": (_el: _Element): void => { add_Capability = $._decodeNull(_el); },
        "sgsn-mmeSeparationSupported": (_el: _Element): void => { sgsn_mmeSeparationSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "mmeRegisteredforSMS": (_el: _Element): void => { mmeRegisteredforSMS = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateGprsLocationRes,
        _extension_additions_list_spec_for_UpdateGprsLocationRes,
        _root_component_type_list_2_spec_for_UpdateGprsLocationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateGprsLocationRes(
        hlr_Number,
        extensionContainer,
        add_Capability,
        sgsn_mmeSeparationSupported,
        mmeRegisteredforSMS,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UpdateGprsLocationRes(el);
}

let _cached_encoder_for_UpdateGprsLocationRes: $.ASN1Encoder<UpdateGprsLocationRes> | null = null;

/**
 * @summary Encodes a(n) UpdateGprsLocationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGprsLocationRes, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGprsLocationRes (value: UpdateGprsLocationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGprsLocationRes) { _cached_encoder_for_UpdateGprsLocationRes = function (value: UpdateGprsLocationRes, elGetter: $.ASN1Encoder<UpdateGprsLocationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.hlr_Number, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.add_Capability === undefined) ? undefined : $._encodeNull(value.add_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_mmeSeparationSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.sgsn_mmeSeparationSupported, $.BER)),
            /* IF_ABSENT  */ ((value.mmeRegisteredforSMS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.mmeRegisteredforSMS, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGprsLocationRes(value, elGetter);
}


/* eslint-enable */
