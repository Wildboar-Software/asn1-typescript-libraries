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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UpdateVcsgLocationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateVcsgLocationArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     msisdn    [2] ISDN-AddressString    OPTIONAL,
 *     vlr-Number    [0] ISDN-AddressString    OPTIONAL,
 *     sgsn-Number    [1] ISDN-AddressString    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class UpdateVcsgLocationArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `vlr_Number`.
         * @public
         * @readonly
         */
        readonly vlr_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
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
     * @summary Restructures an object into a UpdateVcsgLocationArg
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateVcsgLocationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateVcsgLocationArg`.
     * @returns {UpdateVcsgLocationArg}
     */
    public static _from_object (_o: { [_K in keyof (UpdateVcsgLocationArg)]: (UpdateVcsgLocationArg)[_K] }): UpdateVcsgLocationArg {
        return new UpdateVcsgLocationArg(_o.imsi, _o.msisdn, _o.vlr_Number, _o.sgsn_Number, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateVcsgLocationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("msisdn", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("vlr-Number", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UpdateVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateVcsgLocationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateVcsgLocationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateVcsgLocationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateVcsgLocationArg: $.ASN1Decoder<UpdateVcsgLocationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateVcsgLocationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateVcsgLocationArg (el: _Element): UpdateVcsgLocationArg {
    if (!_cached_decoder_for_UpdateVcsgLocationArg) { _cached_decoder_for_UpdateVcsgLocationArg = function (el: _Element): UpdateVcsgLocationArg {
    let imsi!: IMSI;
    let msisdn: OPTIONAL<ISDN_AddressString>;
    let vlr_Number: OPTIONAL<ISDN_AddressString>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "vlr-Number": (_el: _Element): void => { vlr_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateVcsgLocationArg,
        _extension_additions_list_spec_for_UpdateVcsgLocationArg,
        _root_component_type_list_2_spec_for_UpdateVcsgLocationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateVcsgLocationArg(
        imsi,
        msisdn,
        vlr_Number,
        sgsn_Number,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UpdateVcsgLocationArg(el);
}

let _cached_encoder_for_UpdateVcsgLocationArg: $.ASN1Encoder<UpdateVcsgLocationArg> | null = null;

/**
 * @summary Encodes a(n) UpdateVcsgLocationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateVcsgLocationArg, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateVcsgLocationArg (value: UpdateVcsgLocationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateVcsgLocationArg) { _cached_encoder_for_UpdateVcsgLocationArg = function (value: UpdateVcsgLocationArg, elGetter: $.ASN1Encoder<UpdateVcsgLocationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.msisdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER)),
            /* IF_ABSENT  */ ((value.vlr_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.vlr_Number, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateVcsgLocationArg(value, elGetter);
}


/* eslint-enable */
