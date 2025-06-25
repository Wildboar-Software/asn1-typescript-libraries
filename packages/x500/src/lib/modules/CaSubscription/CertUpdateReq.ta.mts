/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertUpdateReq_certs_Item,
    _decode_CertUpdateReq_certs_Item,
    _encode_CertUpdateReq_certs_Item,
} from "../CaSubscription/CertUpdateReq-certs-Item.ta.mjs";
import {
    InvokeID,
    _decode_InvokeID,
    _encode_InvokeID,
} from "../CaSubscription/InvokeID.ta.mjs";
/**
 * @summary CertUpdateReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertUpdateReq ::= SEQUENCE {
 *   invokeID     InvokeID,
 *   certs  SEQUENCE (SIZE (1..MAX)) OF SEQUENCE {
 *     subject      Name,
 *     serialNumber CertificateSerialNumber,
 *     certStatus   CertStatus,
 *     ... },
 *   ... }
 * ```
 *
 * @class
 */
export class CertUpdateReq {
    constructor(
        /**
         * @summary `invokeID`.
         * @public
         * @readonly
         */
        readonly invokeID: InvokeID,
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: CertUpdateReq_certs_Item[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertUpdateReq
     * @description
     *
     * This takes an `object` and converts it to a `CertUpdateReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertUpdateReq`.
     * @returns {CertUpdateReq}
     */
    public static _from_object(
        _o: { [_K in keyof CertUpdateReq]: CertUpdateReq[_K] }
    ): CertUpdateReq {
        return new CertUpdateReq(
            _o.invokeID,
            _o.certs,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertUpdateReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "invokeID",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertUpdateReq: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertUpdateReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertUpdateReq: $.ComponentSpec[] = [];

let _cached_decoder_for_CertUpdateReq: $.ASN1Decoder<CertUpdateReq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertUpdateReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertUpdateReq} The decoded data structure.
 */
export function _decode_CertUpdateReq(el: _Element): CertUpdateReq {
    if (!_cached_decoder_for_CertUpdateReq) {
        _cached_decoder_for_CertUpdateReq = function (
            el: _Element
        ): CertUpdateReq {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertUpdateReq contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "invokeID";
            sequence[1].name = "certs";
            let invokeID!: InvokeID;
            let certs!: CertUpdateReq_certs_Item[];
            invokeID = _decode_InvokeID(sequence[0]);
            certs = $._decodeSequenceOf<CertUpdateReq_certs_Item>(
                () => _decode_CertUpdateReq_certs_Item
            )(sequence[1]);
            return new CertUpdateReq(invokeID, certs, sequence.slice(2));
        };
    }
    return _cached_decoder_for_CertUpdateReq(el);
}

let _cached_encoder_for_CertUpdateReq: $.ASN1Encoder<CertUpdateReq> | null = null;

/**
 * @summary Encodes a(n) CertUpdateReq into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertUpdateReq, encoded as an ASN.1 Element.
 */
export function _encode_CertUpdateReq(
    value: CertUpdateReq,
    elGetter: $.ASN1Encoder<CertUpdateReq>
): _Element {
    if (!_cached_encoder_for_CertUpdateReq) {
        _cached_encoder_for_CertUpdateReq = function (
            value: CertUpdateReq        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_InvokeID(
                                value.invokeID,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeSequenceOf<CertUpdateReq_certs_Item>(
                                () => _encode_CertUpdateReq_certs_Item,
                                $.DER
                            )(value.certs, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertUpdateReq(value, elGetter);
}


/* eslint-enable */
