/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CheckType, _encode_CheckType, _enum_for_CheckType, CheckType } from "../LI-PS-PDU/CheckType.ta.mjs";
// export { CheckType, _enum_for_CheckType, CheckType_hash /* IMPORTED_LONG_ENUMERATION_ITEM */, hash /* IMPORTED_SHORT_ENUMERATION_ITEM */, CheckType_signature /* IMPORTED_LONG_ENUMERATION_ITEM */, signature /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CheckType, _encode_CheckType } from "../LI-PS-PDU/CheckType.ta.mjs";
import { _decode_DataType, _encode_DataType, _enum_for_DataType, DataType } from "../LI-PS-PDU/DataType.ta.mjs";
// export { DataType, _enum_for_DataType, DataType_iRI /* IMPORTED_LONG_ENUMERATION_ITEM */, iRI /* IMPORTED_SHORT_ENUMERATION_ITEM */, DataType_cC /* IMPORTED_LONG_ENUMERATION_ITEM */, cC /* IMPORTED_SHORT_ENUMERATION_ITEM */, DataType_iLHI /* IMPORTED_LONG_ENUMERATION_ITEM */, iLHI /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DataType, _encode_DataType } from "../LI-PS-PDU/DataType.ta.mjs";
import { _decode_HashAlgorithm, _encode_HashAlgorithm, _enum_for_HashAlgorithm, HashAlgorithm } from "../LI-PS-PDU/HashAlgorithm.ta.mjs";
// export { HashAlgorithm, _enum_for_HashAlgorithm, HashAlgorithm_sHA_1 /* IMPORTED_LONG_ENUMERATION_ITEM */, sHA_1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, HashAlgorithm_sHA_256 /* IMPORTED_LONG_ENUMERATION_ITEM */, sHA_256 /* IMPORTED_SHORT_ENUMERATION_ITEM */, HashAlgorithm_sHA_384 /* IMPORTED_LONG_ENUMERATION_ITEM */, sHA_384 /* IMPORTED_SHORT_ENUMERATION_ITEM */, HashAlgorithm_sHA_512 /* IMPORTED_LONG_ENUMERATION_ITEM */, sHA_512 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_HashAlgorithm, _encode_HashAlgorithm } from "../LI-PS-PDU/HashAlgorithm.ta.mjs";


/**
 * @summary IntegrityCheck
 * @description
 * 
 * A hash or a DSS/DSA signature inserted by the handover manager so the LEMF
 * can check integrity of intercepted data. Used only by national agreement, and
 * then only as annex J describes.
 *
 * A chain is one combination of LIID, communication identifier, and `dataType`
 * (IRI, CC, or inter-LEMF handover). Each chain has its own sequence-number
 * counter. In the ordinary case that is four counters per communication
 * identifier: CC hashes, IRI hashes, CC signatures, and IRI signatures.
 * Inter-LEMF handover adds two: iLHI hashes and iLHI signatures.
 *
 * A hash covers the DataPDUs already sent on that chain (a DataPDU is a PS-PDU
 * whose payload is CC, IRI, or inter-LEMF handover). It is sent when the hash
 * timeout elapses (the timer starts when the first DataPDU is included and is
 * reset when the timeout is reached; a typical value is 1 second), or when
 * `dataPduCount` DataPDUs have been sent (typical value 1000), or when the
 * intercept ends with DataPDUs still unhashed. The timeout is not started until
 * a DataPDU is waiting to be hashed, so an idle session does not produce an
 * endless chain.
 *
 * A signature covers the hashes already sent on that chain. It is sent when the
 * signature timeout elapses (typical value 300 seconds), or when `hashPduCount`
 * hashes have been sent (typical value 15), or when the intercept ends with
 * hashes still unsigned. Those four counts are national parameters. If the
 * integrity mechanism is in use and the delivery function must discard data,
 * HI2 information is dropped before any IntegrityCheck PDU.
 *
 * SHA is FIPS PUB 180-4. The SHA variant is a national choice and may be named
 * in `hashAlgorithm`. A signature is DSS/DSA as in FIPS PUB 186-4; parameter
 * sizes, the SHA used inside DSA, and key generation and distribution are
 * national or out of scope.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntegrityCheck ::= SEQUENCE
 * {
 *     includedSequenceNumbers     [0] SEQUENCE OF INTEGER (0..4294967295),
 *         -- gives the order the PDUs were processed
 *     checkType                   [1] CheckType,
 *     dataType                    [2] DataType OPTIONAL,
 *         -- From version5(5) the dataType is mandatory for hashes and for signatures
 *         -- (see clause 7.2.3)
 *     checkValue                  [3] OCTET STRING,
 *         -- Network byte order
 *         -- If checkValue contains a signature, the octet string field space may be
 *         -- used to insert the appropriate ASN.1 DER or BER encoded structure for the
 *         -- DSS/DSA signature as described in IETF RFC 3279 [43], clause 2.2.2.
 *     ...,
 *     hashAlgorithm               [4] HashAlgorithm OPTIONAL
 *         -- Clarifies the hash function if checkType is hash(1).
 *         -- If used, it shall be present for each checkType hash(1).
 * }
 * ```
 * 
 * @class
 */
export
class IntegrityCheck {
    /**
     * @summary `includedSequenceNumbers`.
     * @description
     *
     * Sequence numbers of the PDUs covered by this check, in the order they
     * were included. For a hash, those are DataPDU sequence numbers in hash
     * order. For a signature, those are sequence numbers of the IntegrityCheck
     * PDUs that carried the hashes, in the order those hashes were sent.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.2.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly includedSequenceNumbers: INTEGER[];
    /**
     * @summary `checkType`.
     * @description
     *
     * Hash or DSS/DSA signature.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly checkType: CheckType;
    /**
     * @summary `dataType`.
     * @description
     *
     * Which chain this check belongs to: IRI, CC, or inter-LEMF handover. From
     * ASN.1 version 5 this field is mandatory for hashes and for signatures.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly dataType: OPTIONAL<DataType>;
    /**
     * @summary `checkValue`.
     * @description
     *
     * The digest or the signature, in network byte order. When the value is a
     * signature, the octet string may hold the DER or BER encoding of the
     * DSS/DSA signature structure in IETF RFC 3279, clause 2.2.2.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly checkValue: OCTET_STRING;
    /**
     * @summary `hashAlgorithm`.
     * @description
     *
     * Which SHA produced the digest when `checkType` is hash. If this field is
     * used, it is present on every hash. The specification does not require it
     * on a signature.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex J, clause J.1.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly hashAlgorithm: OPTIONAL<HashAlgorithm>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 7.2.3, annex J.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        includedSequenceNumbers: INTEGER[],
        checkType: CheckType,
        dataType: OPTIONAL<DataType>,
        checkValue: OCTET_STRING,
        hashAlgorithm?: OPTIONAL<HashAlgorithm>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.includedSequenceNumbers = includedSequenceNumbers;
        this.checkType = checkType;
        this.dataType = dataType;
        this.checkValue = checkValue;
        this.hashAlgorithm = hashAlgorithm;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IntegrityCheck
     * @description
     * 
     * This takes an `object` and converts it to a `IntegrityCheck`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IntegrityCheck`.
     * @returns {IntegrityCheck}
     */
    public static _from_object (_o: { [_K in keyof (IntegrityCheck)]: (IntegrityCheck)[_K] }): IntegrityCheck {
        return new IntegrityCheck(_o.includedSequenceNumbers, _o.checkType, _o.dataType, _o.checkValue, _o.hashAlgorithm, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `checkType`
         * @public
         * @static
         */

    public static _enum_for_checkType = _enum_for_CheckType;        /**
         * @summary The enum used as the type of the component `dataType`
         * @public
         * @static
         */

    public static _enum_for_dataType = _enum_for_DataType;        /**
         * @summary The enum used as the type of the component `hashAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_hashAlgorithm = _enum_for_HashAlgorithm;
}

/**
 * @summary The Leading Root Component Types of IntegrityCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IntegrityCheck: $.ComponentSpec[] = [
    new $.ComponentSpec("includedSequenceNumbers", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("checkType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dataType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("checkValue", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IntegrityCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IntegrityCheck: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IntegrityCheck
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IntegrityCheck: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlgorithm", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_IntegrityCheck: $.ASN1Decoder<IntegrityCheck> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntegrityCheck
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntegrityCheck (el: _Element): IntegrityCheck {
    if (!_cached_decoder_for_IntegrityCheck) { _cached_decoder_for_IntegrityCheck = function (el: _Element): IntegrityCheck {
    let includedSequenceNumbers!: INTEGER[];
    let checkType!: CheckType;
    let dataType: OPTIONAL<DataType>;
    let checkValue!: OCTET_STRING;
    let hashAlgorithm: OPTIONAL<HashAlgorithm>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "includedSequenceNumbers": (_el: _Element): void => {
            includedSequenceNumbers = $._decode_implicit<INTEGER[]>(() => $._decodeSequenceOf<INTEGER>(() => $._decodeInteger))(_el);
            for (const _item of includedSequenceNumbers) {
                const _n = typeof _item === "bigint" ? _item : BigInt(_item);
                if (_n < 0n || _n > 4294967295n) {
                    throw new ASN1OverflowError("IntegrityCheck.includedSequenceNumbers element violates INTEGER range");
                }
            }
        },
        "checkType": (_el: _Element): void => { checkType = $._decode_implicit<CheckType>(() => _decode_CheckType)(_el); },
        "dataType": (_el: _Element): void => { dataType = $._decode_implicit<DataType>(() => _decode_DataType)(_el); },
        "checkValue": (_el: _Element): void => { checkValue = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "hashAlgorithm": (_el: _Element): void => { hashAlgorithm = $._decode_implicit<HashAlgorithm>(() => _decode_HashAlgorithm)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntegrityCheck,
        _extension_additions_list_spec_for_IntegrityCheck,
        _root_component_type_list_2_spec_for_IntegrityCheck,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IntegrityCheck(
        includedSequenceNumbers,
        checkType,
        dataType,
        checkValue,
        hashAlgorithm,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IntegrityCheck(el);
}

let _cached_encoder_for_IntegrityCheck: $.ASN1Encoder<IntegrityCheck> | null = null;

/**
 * @summary Encodes a(n) IntegrityCheck into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegrityCheck, encoded as an ASN.1 Element.
 */
export
function _encode_IntegrityCheck (value: IntegrityCheck, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntegrityCheck) { _cached_encoder_for_IntegrityCheck = function (value: IntegrityCheck, elGetter: $.ASN1Encoder<IntegrityCheck>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<INTEGER>(() => $._encodeInteger, $.BER), $.BER)(value.includedSequenceNumbers, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CheckType, $.BER)(value.checkType, $.BER);
    if (value.dataType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_DataType, $.BER)(value.dataType, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.checkValue, $.BER);
    if (value.hashAlgorithm !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_HashAlgorithm, $.BER)(value.hashAlgorithm, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IntegrityCheck(value, elGetter);
}


/* eslint-enable */
