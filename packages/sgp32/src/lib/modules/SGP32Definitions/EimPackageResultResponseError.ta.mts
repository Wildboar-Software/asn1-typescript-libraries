/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";
import { EimPackageResultErrorCode, _decode_EimPackageResultErrorCode, _encode_EimPackageResultErrorCode } from "../SGP32Definitions/EimPackageResultErrorCode.ta.mjs";


/**
 * @summary EimPackageResultResponseError
 * @description
 * 
 * IPA failure alternative of an eIM Package Result (SGP.32 v1.2, sections
 * 2.11.2 and 6.3.2.7). On receipt the eIM updates the eIM Packages pending for
 * the eUICC (section 5.14.6).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimPackageResultResponseError ::= SEQUENCE {
 *     eimTransactionId [0] TransactionId OPTIONAL,
 *     eimPackageResultErrorCode EimPackageResultErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class EimPackageResultResponseError {
    /**
     * @summary `eimTransactionId`.
     * @description
     * When the eIM Package contained a transaction identifier, the IPA returns
     * that same value here (SGP.32 v1.2, section 6.3.2.7). The identifier itself
     * is as defined in SGP.22, which SGP.32 cites from section 2.11.1.1.
     * @public
     * @readonly
     */
    public readonly eimTransactionId: OPTIONAL<TransactionId>;
    /**
     * @summary `eimPackageResultErrorCode`.
     * @description
     * Why the IPA rejected or failed the eIM Package. invalidPackageFormat and
     * unknownPackage are defined in sections 3.2 and 5.14.4. SGP.32 v1.2 does not
     * further define undefinedError beyond listing it in section 6.3.2.7.
     * @public
     * @readonly
     */
    public readonly eimPackageResultErrorCode: EimPackageResultErrorCode;

    constructor (
        eimTransactionId: OPTIONAL<TransactionId>,
        eimPackageResultErrorCode: EimPackageResultErrorCode
    ) {
        this.eimTransactionId = eimTransactionId;
        this.eimPackageResultErrorCode = eimPackageResultErrorCode;
    }

    /**
     * @summary Restructures an object into a EimPackageResultResponseError
     * @description
     * 
     * This takes an `object` and converts it to a `EimPackageResultResponseError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimPackageResultResponseError`.
     * @returns {EimPackageResultResponseError}
     */
    public static _from_object (_o: { [_K in keyof (EimPackageResultResponseError)]: (EimPackageResultResponseError)[_K] }): EimPackageResultResponseError {
        return new EimPackageResultResponseError(_o.eimTransactionId, _o.eimPackageResultErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of EimPackageResultResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimPackageResultResponseError: $.ComponentSpec[] = [
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimPackageResultErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of EimPackageResultResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimPackageResultResponseError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimPackageResultResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimPackageResultResponseError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimPackageResultResponseError: $.ASN1Decoder<EimPackageResultResponseError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimPackageResultResponseError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimPackageResultResponseError (el: _Element): EimPackageResultResponseError {
    if (!_cached_decoder_for_EimPackageResultResponseError) { _cached_decoder_for_EimPackageResultResponseError = function (el: _Element): EimPackageResultResponseError {
    let eimTransactionId: OPTIONAL<TransactionId>;
    let eimPackageResultErrorCode!: EimPackageResultErrorCode;
    const callbacks: $.DecodingMap = {
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "eimPackageResultErrorCode": (_el: _Element): void => { eimPackageResultErrorCode = _decode_EimPackageResultErrorCode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimPackageResultResponseError,
        _extension_additions_list_spec_for_EimPackageResultResponseError,
        _root_component_type_list_2_spec_for_EimPackageResultResponseError,
        undefined,
    );
    return new EimPackageResultResponseError(
        eimTransactionId,
        eimPackageResultErrorCode
    );
}; }
    return _cached_decoder_for_EimPackageResultResponseError(el);
}

let _cached_encoder_for_EimPackageResultResponseError: $.ASN1Encoder<EimPackageResultResponseError> | null = null;

/**
 * @summary Encodes a(n) EimPackageResultResponseError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimPackageResultResponseError, encoded as an ASN.1 Element.
 */
export
function _encode_EimPackageResultResponseError (value: EimPackageResultResponseError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimPackageResultResponseError) { _cached_encoder_for_EimPackageResultResponseError = function (value: EimPackageResultResponseError): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_EimPackageResultErrorCode(value.eimPackageResultErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimPackageResultResponseError(value, elGetter);
}


/* eslint-enable */
