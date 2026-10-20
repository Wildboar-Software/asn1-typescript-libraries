/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
import { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AuthenticationFramework/AttributeCertificate.ta.mjs";
// export { AttributeCertificate, _decode_AttributeCertificate, _encode_AttributeCertificate } from "../AuthenticationFramework/AttributeCertificate.ta.mjs";


/**
 * @summary ACPathData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACPathData ::= SEQUENCE {
 *   certificate           [0]  Certificate OPTIONAL,
 *   attributeCertificate  [1]  AttributeCertificate OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ACPathData {
    /**
     * @summary `certificate`.
     * @public
     * @readonly
     */
    readonly certificate: OPTIONAL<Certificate>;
    /**
     * @summary `attributeCertificate`.
     * @public
     * @readonly
     */
    readonly attributeCertificate: OPTIONAL<AttributeCertificate>;

    constructor (
        certificate: OPTIONAL<Certificate>,
        attributeCertificate: OPTIONAL<AttributeCertificate>
    ) {
        this.certificate = certificate;
        this.attributeCertificate = attributeCertificate;
    }

    /**
     * @summary Restructures an object into a ACPathData
     * @description
     * 
     * This takes an `object` and converts it to a `ACPathData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ACPathData`.
     * @returns {ACPathData}
     */
    public static _from_object (_o: { [_K in keyof (ACPathData)]: (ACPathData)[_K] }): ACPathData {
        return new ACPathData(_o.certificate, _o.attributeCertificate);
    }


}

/**
 * @summary The Leading Root Component Types of ACPathData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ACPathData: $.ComponentSpec[] = [
    new $.ComponentSpec("certificate", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("attributeCertificate", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ACPathData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ACPathData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ACPathData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ACPathData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ACPathData: $.ASN1Decoder<ACPathData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACPathData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACPathData (el: _Element): ACPathData {
    if (!_cached_decoder_for_ACPathData) { _cached_decoder_for_ACPathData = function (el: _Element): ACPathData {
    let certificate: OPTIONAL<Certificate>;
    let attributeCertificate: OPTIONAL<AttributeCertificate>;
    const callbacks: $.DecodingMap = {
        "certificate": (_el: _Element): void => { certificate = $._decode_explicit<Certificate>(() => _decode_Certificate)(_el); },
        "attributeCertificate": (_el: _Element): void => { attributeCertificate = $._decode_explicit<AttributeCertificate>(() => _decode_AttributeCertificate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ACPathData,
        _extension_additions_list_spec_for_ACPathData,
        _root_component_type_list_2_spec_for_ACPathData,
        undefined,
    );
    return new ACPathData(
        certificate,
        attributeCertificate
    );
}; }
    return _cached_decoder_for_ACPathData(el);
}

let _cached_encoder_for_ACPathData: $.ASN1Encoder<ACPathData> | null = null;

/**
 * @summary Encodes a(n) ACPathData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACPathData, encoded as an ASN.1 Element.
 */
export
function _encode_ACPathData (value: ACPathData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACPathData) { _cached_encoder_for_ACPathData = function (value: ACPathData, elGetter: $.ASN1Encoder<ACPathData>): _Element {
    const _components: _Element[] = [];
    if (value.certificate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Certificate, $.BER)(value.certificate, $.BER));
    }
    if (value.attributeCertificate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_AttributeCertificate, $.BER)(value.attributeCertificate, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ACPathData(value, elGetter);
}


/* eslint-enable */
