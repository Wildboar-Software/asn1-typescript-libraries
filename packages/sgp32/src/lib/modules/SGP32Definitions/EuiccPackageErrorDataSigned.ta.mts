/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { EuiccPackageErrorCode, _decode_EuiccPackageErrorCode, _encode_EuiccPackageErrorCode } from "../SGP32Definitions/EuiccPackageErrorCode.ta.mjs";


/**
 * @summary EuiccPackageErrorDataSigned
 * @description
 * 
 * Signed input of euiccSignEPE for a verification failure (SGP.32 v1.2,
 * section 2.11.2.1). The signature covers these bytes concatenated with the
 * association token; the token value zero is used when none is configured. The
 * eUICC does not keep this error. It echoes eimId, counterValue, and, when the
 * request had one, eimTransactionId, so the eIM can match the error to the
 * package (sections 2.11.1.1 and 2.11.2.1). The stored replay counter is
 * updated only when a signed execution result is later produced (section
 * 5.9.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorDataSigned ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)),
 *     counterValue [1] INTEGER,
 *     eimTransactionId [2] TransactionId OPTIONAL,
 *     euiccPackageErrorCode EuiccPackageErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageErrorDataSigned {
    constructor (
        /**
         * @summary `eimId`.
         * @description
         * eimId from the rejected euiccPackageSigned, echoed so the eIM can match this
         * error to the package it sent (SGP.32 v1.2, sections 2.11.1.1 and 5.9.1).
         * Length 1 to 128 bytes (section 4.3).
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `counterValue`.
         * @description
         * counterValue from the rejected package, echoed for the same matching (SGP.32
         * v1.2, section 2.11.1.1). A replay or an out-of-range counter is reported in
         * euiccPackageErrorCode, and this field still carries the value that was
         * checked.
         * @public
         * @readonly
         */
        readonly counterValue: INTEGER,
        /**
         * @summary `eimTransactionId`.
         * @description
         * Present when the signed package contained eimTransactionId; the eUICC echoes
         * that same value (SGP.32 v1.2, section 2.11.2.1). The identifier is as
         * defined in SGP.22, which SGP.32 cites from section 2.11.1.1.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `euiccPackageErrorCode`.
         * @description
         * Why verification failed or why the package was rejected after the eIM key
         * was resolved (SGP.32 v1.2, sections 2.11.2.1 and 5.9.1). Unknown eimId and a
         * bad signature use the unsigned error instead.
         * @public
         * @readonly
         */
        readonly euiccPackageErrorCode: EuiccPackageErrorCode
    ) {
        if (this.eimId.length < 1 || this.eimId.length > 128) {
            throw new ASN1SizeError("EuiccPackageErrorDataSigned.eimId violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a EuiccPackageErrorDataSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageErrorDataSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageErrorDataSigned`.
     * @returns {EuiccPackageErrorDataSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageErrorDataSigned)]: (EuiccPackageErrorDataSigned)[_K] }): EuiccPackageErrorDataSigned {
        return new EuiccPackageErrorDataSigned(_o.eimId, _o.counterValue, _o.eimTransactionId, _o.euiccPackageErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("euiccPackageErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageErrorDataSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageErrorDataSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageErrorDataSigned: $.ASN1Decoder<EuiccPackageErrorDataSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorDataSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorDataSigned (el: _Element): EuiccPackageErrorDataSigned {
    if (!_cached_decoder_for_EuiccPackageErrorDataSigned) { _cached_decoder_for_EuiccPackageErrorDataSigned = function (el: _Element): EuiccPackageErrorDataSigned {
    let eimId!: UTF8String;
    let counterValue!: INTEGER;
    let eimTransactionId: OPTIONAL<TransactionId>;
    let euiccPackageErrorCode!: EuiccPackageErrorCode;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "counterValue": (_el: _Element): void => { counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "euiccPackageErrorCode": (_el: _Element): void => { euiccPackageErrorCode = _decode_EuiccPackageErrorCode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EuiccPackageErrorDataSigned,
        _extension_additions_list_spec_for_EuiccPackageErrorDataSigned,
        _root_component_type_list_2_spec_for_EuiccPackageErrorDataSigned,
        undefined,
    );
    return new EuiccPackageErrorDataSigned(
        eimId,
        counterValue,
        eimTransactionId,
        euiccPackageErrorCode
    );
}; }
    return _cached_decoder_for_EuiccPackageErrorDataSigned(el);
}

let _cached_encoder_for_EuiccPackageErrorDataSigned: $.ASN1Encoder<EuiccPackageErrorDataSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorDataSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorDataSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorDataSigned (value: EuiccPackageErrorDataSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorDataSigned) { _cached_encoder_for_EuiccPackageErrorDataSigned = function (value: EuiccPackageErrorDataSigned): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.counterValue, $.BER),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_EuiccPackageErrorCode(value.euiccPackageErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageErrorDataSigned(value, elGetter);
}


/* eslint-enable */
