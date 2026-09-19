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
import { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";
// export { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";
import { QOSFlowTunnelInformationList, _decode_QOSFlowTunnelInformationList, _encode_QOSFlowTunnelInformationList } from "../TS33128Payloads/QOSFlowTunnelInformationList.ta.mjs";
// export { QOSFlowTunnelInformationList, _decode_QOSFlowTunnelInformationList, _encode_QOSFlowTunnelInformationList } from "../TS33128Payloads/QOSFlowTunnelInformationList.ta.mjs";


/**
 * @summary DLRANTunnelInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DLRANTunnelInformation ::= SEQUENCE
 * {
 *     dLQOSFlowTunnelInformation                    [1] QOSFlowTunnelInformation OPTIONAL,
 *     additionalDLQOSFlowTunnelInformation          [2] QOSFlowTunnelInformationList OPTIONAL,
 *     redundantDLQOSFlowTunnelInformation           [3] QOSFlowTunnelInformationList OPTIONAL,
 *     additionalredundantDLQOSFlowTunnelInformation [4] QOSFlowTunnelInformationList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DLRANTunnelInformation {
    constructor (
        /**
         * @summary `dLQOSFlowTunnelInformation`.
         * @public
         * @readonly
         */
        readonly dLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformation>,
        /**
         * @summary `additionalDLQOSFlowTunnelInformation`.
         * @public
         * @readonly
         */
        readonly additionalDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>,
        /**
         * @summary `redundantDLQOSFlowTunnelInformation`.
         * @public
         * @readonly
         */
        readonly redundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>,
        /**
         * @summary `additionalredundantDLQOSFlowTunnelInformation`.
         * @public
         * @readonly
         */
        readonly additionalredundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>
    ) {}

    /**
     * @summary Restructures an object into a DLRANTunnelInformation
     * @description
     * 
     * This takes an `object` and converts it to a `DLRANTunnelInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLRANTunnelInformation`.
     * @returns {DLRANTunnelInformation}
     */
    public static _from_object (_o: { [_K in keyof (DLRANTunnelInformation)]: (DLRANTunnelInformation)[_K] }): DLRANTunnelInformation {
        return new DLRANTunnelInformation(_o.dLQOSFlowTunnelInformation, _o.additionalDLQOSFlowTunnelInformation, _o.redundantDLQOSFlowTunnelInformation, _o.additionalredundantDLQOSFlowTunnelInformation);
    }


}

/**
 * @summary The Leading Root Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("dLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("additionalDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("redundantDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalredundantDLQOSFlowTunnelInformation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DLRANTunnelInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DLRANTunnelInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DLRANTunnelInformation: $.ASN1Decoder<DLRANTunnelInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLRANTunnelInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DLRANTunnelInformation (el: _Element): DLRANTunnelInformation {
    if (!_cached_decoder_for_DLRANTunnelInformation) { _cached_decoder_for_DLRANTunnelInformation = function (el: _Element): DLRANTunnelInformation {
    let dLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformation>;
    let additionalDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    let redundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    let additionalredundantDLQOSFlowTunnelInformation: OPTIONAL<QOSFlowTunnelInformationList>;
    const callbacks: $.DecodingMap = {
        "dLQOSFlowTunnelInformation": (_el: _Element): void => { dLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformation>(() => _decode_QOSFlowTunnelInformation)(_el); },
        "additionalDLQOSFlowTunnelInformation": (_el: _Element): void => { additionalDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); },
        "redundantDLQOSFlowTunnelInformation": (_el: _Element): void => { redundantDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); },
        "additionalredundantDLQOSFlowTunnelInformation": (_el: _Element): void => { additionalredundantDLQOSFlowTunnelInformation = $._decode_implicit<QOSFlowTunnelInformationList>(() => _decode_QOSFlowTunnelInformationList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DLRANTunnelInformation,
        _extension_additions_list_spec_for_DLRANTunnelInformation,
        _root_component_type_list_2_spec_for_DLRANTunnelInformation,
        undefined,
    );
    return new DLRANTunnelInformation(
        dLQOSFlowTunnelInformation,
        additionalDLQOSFlowTunnelInformation,
        redundantDLQOSFlowTunnelInformation,
        additionalredundantDLQOSFlowTunnelInformation
    );
}; }
    return _cached_decoder_for_DLRANTunnelInformation(el);
}

let _cached_encoder_for_DLRANTunnelInformation: $.ASN1Encoder<DLRANTunnelInformation> | null = null;

/**
 * @summary Encodes a(n) DLRANTunnelInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLRANTunnelInformation, encoded as an ASN.1 Element.
 */
export
function _encode_DLRANTunnelInformation (value: DLRANTunnelInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DLRANTunnelInformation) { _cached_encoder_for_DLRANTunnelInformation = function (value: DLRANTunnelInformation, elGetter: $.ASN1Encoder<DLRANTunnelInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dLQOSFlowTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_QOSFlowTunnelInformation, $.BER)(value.dLQOSFlowTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.additionalDLQOSFlowTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.additionalDLQOSFlowTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.redundantDLQOSFlowTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.redundantDLQOSFlowTunnelInformation, $.BER)),
            /* IF_ABSENT  */ ((value.additionalredundantDLQOSFlowTunnelInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_QOSFlowTunnelInformationList, $.BER)(value.additionalredundantDLQOSFlowTunnelInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DLRANTunnelInformation(value, elGetter);
}


/* eslint-enable */
