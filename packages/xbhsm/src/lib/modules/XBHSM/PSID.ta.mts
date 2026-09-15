/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../XBHSM/HashAlgorithm.ta.mjs";
import {
    HashContent,
    _decode_HashContent,
    _encode_HashContent,
} from "../XBHSM/HashContent.ta.mjs";

/**
 * @summary PSID
 * @description
 *
 * Pseudonymous identifier (PSID; PI in ISO/IEC 24745) that
 * binds the BHSM user to an X.509 certificate without placing
 * the raw biometric reference in the certificate
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 clauses 3.2.3, 4 note 1, 6.3, 8.1.2).
 * Generated as `PSID = h(BR, R)` (clause 8.1.2.2). Shall be
 * unique in the BHSM's context of use, and the certificate
 * value shall match the value stored in the BHSM
 * (clause 8.1.2.1). The user's distinguished name may be the
 * same as the PSID (clause 8.1.3).
 *
 * The CA inserts the PSID into `subjectAltName` as a
 * `directoryName` (clauses 7.2.1 g, 8.1.4, Annex A.3). This
 * ASN.1 type carries `hashAlg` and `hashContent` (the BR and
 * `R`); clause 8.1.2.2 defines the identifier as the hash of
 * those inputs. The spec does not say whether the digest, this
 * structure, or both appear in `subjectAltName`.
 *
 * After local biometric authentication, the BHSM signs the
 * concatenation of PSID and challenge `Ra`; the authentication
 * server compares that PSID with the one in the certificate
 * (clauses 7.3.1, 8.2). Only the PSID should leave the BHSM
 * during enrolment and authentication (clause 6.3).
 *
 * Annex A.3 also mentions `realName` (UTF8String name of the
 * certificate owner) and `userInfo` for additional
 * identification including the PSID; those fields are not
 * defined in the XBHSM ASN.1 module.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PSID ::= SEQUENCE {
 *         hashAlg        HashAlgorithm,
 *         hashContent     HashContent
 *               }
 * ```
 *
 * @class
 */
export class PSID {
    constructor(
        /**
         * @summary `hashAlg`.
         * @description
         *
         * Hash algorithm and parameters used to generate the
         * PSID (Annex A.3).
         * @public
         * @readonly
         */
        readonly hashAlg: HashAlgorithm,
        /**
         * @summary `hashContent`.
         * @description
         *
         * Hash inputs: biometric reference `BR` and random
         * number `R` (Annex A.3; clause 8.1.2.2).
         * @public
         * @readonly
         */
        readonly hashContent: HashContent
    ) {}

    /**
     * @summary Restructures an object into a PSID
     * @description
     *
     * This takes an `object` and converts it to a `PSID`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PSID`.
     * @returns {PSID}
     */
    public static _from_object(
        _o: { [_K in keyof PSID]: PSID[_K] }
    ): PSID {
        return new PSID(_o.hashAlg, _o.hashContent);
    }
}

/**
 * @summary The Leading Root Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PSID: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlg", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("hashContent", false, $.hasTag(_TagClass.context, 1)),
];

/**
 * @summary The Trailing Root Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PSID: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PSID
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PSID: $.ComponentSpec[] = [];

let _cached_decoder_for_PSID: $.ASN1Decoder<PSID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PSID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export function _decode_PSID(el: _Element): PSID {
    if (!_cached_decoder_for_PSID) {
        _cached_decoder_for_PSID = function (el: _Element): PSID {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PSID contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "hashAlg";
            sequence[1].name = "hashContent";
            const hashAlg: HashAlgorithm = _decode_HashAlgorithm(sequence[0]);
            const hashContent: HashContent = _decode_HashContent(sequence[1]);
            return new PSID(hashAlg, hashContent);
        };
    }
    return _cached_decoder_for_PSID(el);
}

let _cached_encoder_for_PSID: $.ASN1Encoder<PSID> | null = null;

/**
 * @summary Encodes a(n) PSID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PSID, encoded as an ASN.1 Element.
 */
export function _encode_PSID(
    value: PSID,
    elGetter: $.ASN1Encoder<PSID>
): _Element {
    if (!_cached_encoder_for_PSID) {
        _cached_encoder_for_PSID = function (value: PSID): _Element {
            return $._encodeSequence(
                (
                    [
                        /* REQUIRED   */ _encode_HashAlgorithm(
                            value.hashAlg,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_HashContent(
                            value.hashContent,
                            $.BER
                        ),
                    ] as (_Element | undefined)[]
                ).filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PSID(value, elGetter);
}

/* eslint-enable */
