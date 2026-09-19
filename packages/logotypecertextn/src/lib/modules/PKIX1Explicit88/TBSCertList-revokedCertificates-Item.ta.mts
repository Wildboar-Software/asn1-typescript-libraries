/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../PKIX1Explicit88/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../PKIX1Explicit88/CertificateSerialNumber.ta.mjs";
import { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";
// export { Time, _decode_Time, _encode_Time } from "../PKIX1Explicit88/Time.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../PKIX1Explicit88/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../PKIX1Explicit88/Extensions.ta.mjs";


/**
 * @summary TBSCertList_revokedCertificates_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBSCertList-revokedCertificates-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TBSCertList_revokedCertificates_Item {
    constructor (
        /**
         * @summary `userCertificate`.
         * @public
         * @readonly
         */
        readonly userCertificate: CertificateSerialNumber,
        /**
         * @summary `revocationDate`.
         * @public
         * @readonly
         */
        readonly revocationDate: Time,
        /**
         * @summary `crlEntryExtensions`.
         * @public
         * @readonly
         */
        readonly crlEntryExtensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSCertList_revokedCertificates_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TBSCertList_revokedCertificates_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertList_revokedCertificates_Item`.
     * @returns {TBSCertList_revokedCertificates_Item}
     */
    public static _from_object (_o: { [_K in keyof (TBSCertList_revokedCertificates_Item)]: (TBSCertList_revokedCertificates_Item)[_K] }): TBSCertList_revokedCertificates_Item {
        return new TBSCertList_revokedCertificates_Item(_o.userCertificate, _o.revocationDate, _o.crlEntryExtensions);
    }


}

/**
 * @summary The Leading Root Component Types of TBSCertList_revokedCertificates_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSCertList_revokedCertificates_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("userCertificate", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("revocationDate", false, $.hasAnyTag),
    new $.ComponentSpec("crlEntryExtensions", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of TBSCertList_revokedCertificates_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSCertList_revokedCertificates_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TBSCertList_revokedCertificates_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSCertList_revokedCertificates_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TBSCertList_revokedCertificates_Item: $.ASN1Decoder<TBSCertList_revokedCertificates_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertList_revokedCertificates_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBSCertList_revokedCertificates_Item (el: _Element): TBSCertList_revokedCertificates_Item {
    if (!_cached_decoder_for_TBSCertList_revokedCertificates_Item) { _cached_decoder_for_TBSCertList_revokedCertificates_Item = function (el: _Element): TBSCertList_revokedCertificates_Item {
    let userCertificate!: CertificateSerialNumber;
    let revocationDate!: Time;
    let crlEntryExtensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "userCertificate": (_el: _Element): void => { userCertificate = _decode_CertificateSerialNumber(_el); },
        "revocationDate": (_el: _Element): void => { revocationDate = _decode_Time(_el); },
        "crlEntryExtensions": (_el: _Element): void => { crlEntryExtensions = _decode_Extensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertList_revokedCertificates_Item,
        _extension_additions_list_spec_for_TBSCertList_revokedCertificates_Item,
        _root_component_type_list_2_spec_for_TBSCertList_revokedCertificates_Item,
        undefined,
    );
    return new TBSCertList_revokedCertificates_Item(
        userCertificate,
        revocationDate,
        crlEntryExtensions
    );
}; }
    return _cached_decoder_for_TBSCertList_revokedCertificates_Item(el);
}

let _cached_encoder_for_TBSCertList_revokedCertificates_Item: $.ASN1Encoder<TBSCertList_revokedCertificates_Item> | null = null;

/**
 * @summary Encodes a(n) TBSCertList_revokedCertificates_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertList_revokedCertificates_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TBSCertList_revokedCertificates_Item (value: TBSCertList_revokedCertificates_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBSCertList_revokedCertificates_Item) { _cached_encoder_for_TBSCertList_revokedCertificates_Item = function (value: TBSCertList_revokedCertificates_Item, elGetter: $.ASN1Encoder<TBSCertList_revokedCertificates_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.userCertificate, $.BER),
            /* REQUIRED   */ _encode_Time(value.revocationDate, $.BER),
            /* IF_ABSENT  */ ((value.crlEntryExtensions === undefined) ? undefined : _encode_Extensions(value.crlEntryExtensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSCertList_revokedCertificates_Item(value, elGetter);
}


/* eslint-enable */
