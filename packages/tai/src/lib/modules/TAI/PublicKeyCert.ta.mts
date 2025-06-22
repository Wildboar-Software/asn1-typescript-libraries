/* eslint-disable */
import {
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
import { Name, _decode_Name, _encode_Name } from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { KeyUsage, _decode_KeyUsage, _encode_KeyUsage } from "@wildboar/x500/src/lib/modules/CertificateExtensions/KeyUsage.ta.mjs";

/**
 * @summary PublicKeyCert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeyCert ::= SEQUENCE {
 *   pkcIssuer        Name,
 *   pkcSerialNumber  CertificateSerialNumber,
 *   pkcUsage         KeyUsage
 * }
 * ```
 * 
 * @class
 */
export
class PublicKeyCert {
    constructor (
        /**
         * @summary `pkcIssuer`.
         * @public
         * @readonly
         */
        readonly pkcIssuer: Name,
        /**
         * @summary `pkcSerialNumber`.
         * @public
         * @readonly
         */
        readonly pkcSerialNumber: CertificateSerialNumber,
        /**
         * @summary `pkcUsage`.
         * @public
         * @readonly
         */
        readonly pkcUsage: KeyUsage
    ) {}

    /**
     * @summary Restructures an object into a PublicKeyCert
     * @description
     * 
     * This takes an `object` and converts it to a `PublicKeyCert`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicKeyCert`.
     * @returns {PublicKeyCert}
     */
    public static _from_object (_o: { [_K in keyof (PublicKeyCert)]: (PublicKeyCert)[_K] }): PublicKeyCert {
        return new PublicKeyCert(_o.pkcIssuer, _o.pkcSerialNumber, _o.pkcUsage);
    }


}

/**
 * @summary The Leading Root Component Types of PublicKeyCert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PublicKeyCert: $.ComponentSpec[] = [
    new $.ComponentSpec("pkcIssuer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pkcSerialNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pkcUsage", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PublicKeyCert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PublicKeyCert: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PublicKeyCert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PublicKeyCert: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PublicKeyCert: $.ASN1Decoder<PublicKeyCert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyCert
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyCert} The decoded data structure.
 */
export
function _decode_PublicKeyCert (el: _Element) {
    if (!_cached_decoder_for_PublicKeyCert) { _cached_decoder_for_PublicKeyCert = function (el: _Element): PublicKeyCert {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PublicKeyCert contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pkcIssuer";
    sequence[1].name = "pkcSerialNumber";
    sequence[2].name = "pkcUsage";
    let pkcIssuer!: Name;
    let pkcSerialNumber!: CertificateSerialNumber;
    let pkcUsage!: KeyUsage;
    pkcIssuer = _decode_Name(sequence[0]);
    pkcSerialNumber = _decode_CertificateSerialNumber(sequence[1]);
    pkcUsage = _decode_KeyUsage(sequence[2]);
    return new PublicKeyCert(
        pkcIssuer,
        pkcSerialNumber,
        pkcUsage,

    );
}; }
    return _cached_decoder_for_PublicKeyCert(el);
}

let _cached_encoder_for_PublicKeyCert: $.ASN1Encoder<PublicKeyCert> | null = null;

/**
 * @summary Encodes a(n) PublicKeyCert into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyCert, encoded as an ASN.1 Element.
 */
export
function _encode_PublicKeyCert (value: PublicKeyCert, elGetter: $.ASN1Encoder<PublicKeyCert>) {
    if (!_cached_encoder_for_PublicKeyCert) { _cached_encoder_for_PublicKeyCert = function (value: PublicKeyCert): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.pkcIssuer, $.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.pkcSerialNumber, $.BER),
            /* REQUIRED   */ _encode_KeyUsage(value.pkcUsage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PublicKeyCert(value, elGetter);
}


/* eslint-enable */
