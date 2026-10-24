/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMAddressDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMAddressDomain ::= SEQUENCE {
 *    sMDomainName           [0] IMPLICIT GraphicString OPTIONAL,
 *    threeGPPIMSI-MCC-MNC   [1] IMPLICIT OCTET STRING ( SIZE( 3 ) ) OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SMAddressDomain {
    /**
     * @summary `sMDomainName`.
     * @public
     * @readonly
     */
    readonly sMDomainName: OPTIONAL<GraphicString>;
    /**
     * @summary `threeGPPIMSI_MCC_MNC`.
     * @public
     * @readonly
     */
    readonly threeGPPIMSI_MCC_MNC: OPTIONAL<OCTET_STRING>;

    constructor (
        sMDomainName?: OPTIONAL<GraphicString>,
        threeGPPIMSI_MCC_MNC?: OPTIONAL<OCTET_STRING>
    ) {
        this.sMDomainName = sMDomainName;
        this.threeGPPIMSI_MCC_MNC = threeGPPIMSI_MCC_MNC;
    
        if (this.threeGPPIMSI_MCC_MNC !== undefined && (this.threeGPPIMSI_MCC_MNC.length !== 3)) {
            throw new ASN1SizeError("SMAddressDomain.threeGPPIMSI_MCC_MNC violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a SMAddressDomain
     * @description
     * 
     * This takes an `object` and converts it to a `SMAddressDomain`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMAddressDomain`.
     * @returns {SMAddressDomain}
     */
    public static _from_object (_o: { [_K in keyof (SMAddressDomain)]: (SMAddressDomain)[_K] }): SMAddressDomain {
        return new SMAddressDomain(_o.sMDomainName, _o.threeGPPIMSI_MCC_MNC);
    }


}

/**
 * @summary The Leading Root Component Types of SMAddressDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMAddressDomain: $.ComponentSpec[] = [
    new $.ComponentSpec("sMDomainName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("threeGPPIMSI-MCC-MNC", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SMAddressDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMAddressDomain: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMAddressDomain
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMAddressDomain: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMAddressDomain: $.ASN1Decoder<SMAddressDomain> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMAddressDomain
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMAddressDomain (el: _Element): SMAddressDomain {
    if (!_cached_decoder_for_SMAddressDomain) { _cached_decoder_for_SMAddressDomain = function (el: _Element): SMAddressDomain {
    let sMDomainName: OPTIONAL<GraphicString>;
    let threeGPPIMSI_MCC_MNC: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "sMDomainName": (_el: _Element): void => { sMDomainName = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "threeGPPIMSI-MCC-MNC": (_el: _Element): void => { threeGPPIMSI_MCC_MNC = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMAddressDomain,
        _extension_additions_list_spec_for_SMAddressDomain,
        _root_component_type_list_2_spec_for_SMAddressDomain,
        undefined,
    );
    return new SMAddressDomain(
        sMDomainName,
        threeGPPIMSI_MCC_MNC
    );
}; }
    return _cached_decoder_for_SMAddressDomain(el);
}

let _cached_encoder_for_SMAddressDomain: $.ASN1Encoder<SMAddressDomain> | null = null;

/**
 * @summary Encodes a(n) SMAddressDomain into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMAddressDomain, encoded as an ASN.1 Element.
 */
export
function _encode_SMAddressDomain (value: SMAddressDomain, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMAddressDomain) { _cached_encoder_for_SMAddressDomain = function (value: SMAddressDomain, _elGetter: $.ASN1Encoder<SMAddressDomain>): _Element {
    const _components: _Element[] = [];
    if (value.sMDomainName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.sMDomainName, $.BER));
    }
    if (value.threeGPPIMSI_MCC_MNC !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.threeGPPIMSI_MCC_MNC, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMAddressDomain(value, elGetter);
}


/* eslint-enable */
