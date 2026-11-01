/* eslint-disable */
import {
    ASN1ConstructionError,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";

/**
 * @summary CertificatePair
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificatePair ::= SEQUENCE {
 *   issuedToThisCA  [0]  Certificate OPTIONAL,
 *   issuedByThisCA  [1]  Certificate OPTIONAL,
 *   ... }
 *   (WITH COMPONENTS { ..., issuedToThisCA PRESENT} |
 *    WITH COMPONENTS { ..., issuedByThisCA PRESENT})
 * ```
 * 
 * @class
 */
export
class CertificatePair {
    /**
     * @summary `issuedToThisCA`.
     * @public
     * @readonly
     */
    readonly issuedToThisCA: OPTIONAL<Certificate>;
    /**
     * @summary `issuedByThisCA`.
     * @public
     * @readonly
     */
    readonly issuedByThisCA: OPTIONAL<Certificate>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        issuedToThisCA: OPTIONAL<Certificate>,
        issuedByThisCA: OPTIONAL<Certificate>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.issuedToThisCA = issuedToThisCA;
        this.issuedByThisCA = issuedByThisCA;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        if (this.issuedToThisCA === undefined && this.issuedByThisCA === undefined) {
            throw new ASN1ConstructionError("CertificatePair requires issuedToThisCA or issuedByThisCA");
        }
    }

    /**
     * @summary Restructures an object into a CertificatePair
     * @description
     * 
     * This takes an `object` and converts it to a `CertificatePair`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificatePair`.
     * @returns {CertificatePair}
     */
    public static _from_object (_o: { [_K in keyof (CertificatePair)]: (CertificatePair)[_K] }): CertificatePair {
        return new CertificatePair(_o.issuedToThisCA, _o.issuedByThisCA, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of CertificatePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificatePair: $.ComponentSpec[] = [
    new $.ComponentSpec("issuedToThisCA", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("issuedByThisCA", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificatePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificatePair: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificatePair
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificatePair: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificatePair: $.ASN1Decoder<CertificatePair> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificatePair
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificatePair (el: _Element): CertificatePair {
    if (!_cached_decoder_for_CertificatePair) { _cached_decoder_for_CertificatePair = function (el: _Element): CertificatePair {
    let issuedToThisCA: OPTIONAL<Certificate>;
    let issuedByThisCA: OPTIONAL<Certificate>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "issuedToThisCA": (_el: _Element): void => { issuedToThisCA = $._decode_explicit<Certificate>(() => _decode_Certificate)(_el); },
        "issuedByThisCA": (_el: _Element): void => { issuedByThisCA = $._decode_explicit<Certificate>(() => _decode_Certificate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificatePair,
        _extension_additions_list_spec_for_CertificatePair,
        _root_component_type_list_2_spec_for_CertificatePair,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CertificatePair(
        issuedToThisCA,
        issuedByThisCA,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CertificatePair(el);
}

let _cached_encoder_for_CertificatePair: $.ASN1Encoder<CertificatePair> | null = null;

/**
 * @summary Encodes a(n) CertificatePair into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificatePair, encoded as an ASN.1 Element.
 */
export
function _encode_CertificatePair (value: CertificatePair, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificatePair) { _cached_encoder_for_CertificatePair = function (value: CertificatePair, elGetter: $.ASN1Encoder<CertificatePair>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.issuedToThisCA !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Certificate, $.BER)(value.issuedToThisCA, $.BER);
    }
    if (value.issuedByThisCA !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_Certificate, $.BER)(value.issuedByThisCA, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CertificatePair(value, elGetter);
}

/* eslint-enable */
