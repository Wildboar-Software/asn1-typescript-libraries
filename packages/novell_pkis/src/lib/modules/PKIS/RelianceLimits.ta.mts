/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MonetaryValue, _decode_MonetaryValue, _encode_MonetaryValue } from "../PKIS/MonetaryValue.ta.mjs";


/**
 * @summary RelianceLimits
 * @description
 *
 * A monetary cap, negotiated by the CA and the subscriber, above which
 * reliance on a signature verified by the certificate should not be
 * treated as commercially reasonable. Display name: "Reliance Limits".
 * §2.
 *
 * One component is a per-transaction cap, in the sense of the Utah
 * Digital Signature Act and similar statutes. The other is an aggregate
 * cap for the certificate, in the sense of a per-certificate liability
 * limit. Neither is a closed-loop count of signatures. Omitting the
 * attribute is different from a limit of zero: the document's reading
 * of those statutes is that only a licensed CA can cap liability this
 * way, and without a stated limit ordinary liability rules apply.
 *
 * This attribute is not inside the Novell Security Attributes
 * extension, and the initial PKIS release does not put it in
 * certificates. §2, §3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelianceLimits ::= SEQUENCE {
 *  perTransactionLimit MonetaryValue,
 *  perCertificateLimit MonetaryValue
 * }
 * ```
 * 
 * @class
 */
export
class RelianceLimits {
    constructor (
        /**
         * @summary `perTransactionLimit`.
         * @description
         *
         * Cap for one transaction. Display name: "Per Transaction
         * Reliance Limit". §2.
         *
         * @public
         * @readonly
         */
        readonly perTransactionLimit: MonetaryValue,
        /**
         * @summary `perCertificateLimit`.
         * @description
         *
         * Aggregate cap for the certificate. Display name: "Per
         * Certificate Reliance Limit". §2.
         *
         * @public
         * @readonly
         */
        readonly perCertificateLimit: MonetaryValue
    ) {}

    /**
     * @summary Restructures an object into a RelianceLimits
     * @description
     * 
     * This takes an `object` and converts it to a `RelianceLimits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelianceLimits`.
     * @returns {RelianceLimits}
     */
    public static _from_object (_o: { [_K in keyof (RelianceLimits)]: (RelianceLimits)[_K] }): RelianceLimits {
        return new RelianceLimits(_o.perTransactionLimit, _o.perCertificateLimit);
    }


}

/**
 * @summary The Leading Root Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RelianceLimits: $.ComponentSpec[] = [
    new $.ComponentSpec("perTransactionLimit", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("perCertificateLimit", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RelianceLimits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RelianceLimits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RelianceLimits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RelianceLimits: $.ASN1Decoder<RelianceLimits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelianceLimits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelianceLimits (el: _Element): RelianceLimits {
    if (!_cached_decoder_for_RelianceLimits) { _cached_decoder_for_RelianceLimits = function (el: _Element): RelianceLimits {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RelianceLimits contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "perTransactionLimit";
    sequence[1].name = "perCertificateLimit";
    let perTransactionLimit!: MonetaryValue;
    let perCertificateLimit!: MonetaryValue;
    perTransactionLimit = _decode_MonetaryValue(sequence[0]);
    perCertificateLimit = _decode_MonetaryValue(sequence[1]);
    return new RelianceLimits(
        perTransactionLimit,
        perCertificateLimit,

    );
}; }
    return _cached_decoder_for_RelianceLimits(el);
}

let _cached_encoder_for_RelianceLimits: $.ASN1Encoder<RelianceLimits> | null = null;

/**
 * @summary Encodes a(n) RelianceLimits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelianceLimits, encoded as an ASN.1 Element.
 */
export
function _encode_RelianceLimits (value: RelianceLimits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelianceLimits) { _cached_encoder_for_RelianceLimits = function (value: RelianceLimits): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_MonetaryValue(value.perTransactionLimit, $.BER),
            /* REQUIRED   */ _encode_MonetaryValue(value.perCertificateLimit, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RelianceLimits(value, elGetter);
}


/* eslint-enable */
