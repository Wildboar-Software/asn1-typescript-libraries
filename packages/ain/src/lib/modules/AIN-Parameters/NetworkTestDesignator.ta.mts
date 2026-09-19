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
import { NtdID, _decode_NtdID, _encode_NtdID } from "../AIN-Parameters/NtdID.ta.mjs";
// export { NtdID, _decode_NtdID, _encode_NtdID } from "../AIN-Parameters/NtdID.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";


/**
 * @summary NetworkTestDesignator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkTestDesignator ::= [97] IMPLICIT SEQUENCE{
 *         ntdID NtdID,
 *         amp1 Amp1 OPTIONAL,
 *         amp2 Amp2 OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class NetworkTestDesignator {
    constructor (
        /**
         * @summary `ntdID`.
         * @public
         * @readonly
         */
        readonly ntdID: NtdID,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>
    ) {}

    /**
     * @summary Restructures an object into a NetworkTestDesignator
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkTestDesignator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkTestDesignator`.
     * @returns {NetworkTestDesignator}
     */
    public static _from_object (_o: { [_K in keyof (NetworkTestDesignator)]: (NetworkTestDesignator)[_K] }): NetworkTestDesignator {
        return new NetworkTestDesignator(_o.ntdID, _o.amp1, _o.amp2);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkTestDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkTestDesignator: $.ComponentSpec[] = [
    new $.ComponentSpec("ntdID", false, $.hasAnyTag),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109))
];

/**
 * @summary The Trailing Root Component Types of NetworkTestDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkTestDesignator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkTestDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkTestDesignator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkTestDesignator: $.ASN1Decoder<NetworkTestDesignator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkTestDesignator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkTestDesignator (el: _Element): NetworkTestDesignator {
    if (!_cached_decoder_for_NetworkTestDesignator) { _cached_decoder_for_NetworkTestDesignator = $._decode_implicit<NetworkTestDesignator>(() => function (el: _Element): NetworkTestDesignator {
    let ntdID!: NtdID;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    const callbacks: $.DecodingMap = {
        "ntdID": (_el: _Element): void => { ntdID = _decode_NtdID(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NetworkTestDesignator,
        _extension_additions_list_spec_for_NetworkTestDesignator,
        _root_component_type_list_2_spec_for_NetworkTestDesignator,
        undefined,
    );
    return new NetworkTestDesignator(
        ntdID,
        amp1,
        amp2
    );
}); }
    return _cached_decoder_for_NetworkTestDesignator(el);
}

let _cached_encoder_for_NetworkTestDesignator: $.ASN1Encoder<NetworkTestDesignator> | null = null;

/**
 * @summary Encodes a(n) NetworkTestDesignator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkTestDesignator, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkTestDesignator (value: NetworkTestDesignator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkTestDesignator) { _cached_encoder_for_NetworkTestDesignator = $._encode_implicit(_TagClass.context, 97, () => function (value: NetworkTestDesignator, elGetter: $.ASN1Encoder<NetworkTestDesignator>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NtdID(value.ntdID, $.BER),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NetworkTestDesignator(value, elGetter);
}


/* eslint-enable */
