/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PASSporTHeader, _decode_PASSporTHeader, _encode_PASSporTHeader } from "../TS33128Payloads/PASSporTHeader.ta.mjs";
// export { PASSporTHeader, _decode_PASSporTHeader, _encode_PASSporTHeader } from "../TS33128Payloads/PASSporTHeader.ta.mjs";
import { PASSporTPayload, _decode_PASSporTPayload, _encode_PASSporTPayload } from "../TS33128Payloads/PASSporTPayload.ta.mjs";
// export { PASSporTPayload, _decode_PASSporTPayload, _encode_PASSporTPayload } from "../TS33128Payloads/PASSporTPayload.ta.mjs";


/**
 * @summary PASSporT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporT ::= SEQUENCE
 * {
 *     pASSporTHeader    [1] PASSporTHeader,
 *     pASSporTPayload   [2] PASSporTPayload,
 *     pASSporTSignature [3] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class PASSporT {
    /**
     * @summary `pASSporTHeader`.
     * @description
     *
     * PASSporT Header as defined in RFC 8224 [70] clause 4 for "shaken"
     * PASSporT, in RFC 8946 [76] clause 3 for "div" PASSportT and in TS 24.229
     * [74]. See table 7.11.2.2-3.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly pASSporTHeader: PASSporTHeader;
    /**
     * @summary `pASSporTPayload`.
     * @description
     *
     * PASSporT Payload as defined in RFC 8224 [70] clause 4 for "shaken"
     * PASSporT, in RFC 8946 [76] clause 3 for "div" PASSporT and in TS 24.229
     * [74]. See table 7.11.2.2-4.
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly pASSporTPayload: PASSporTPayload;
    /**
     * @summary `pASSporTSignature`.
     * @description
     *
     * PASSporT Signature as defined in RFC 8224 [70] clause 4 for "shaken"
     * PASSporT, in RFC 8946 [76] clause 3 for "div" PASSporT and in TS 24.229
     * [74].
     *
     * 3GPP TS 33.128, clause 7.11.2.2.
     *
     * @public
     * @readonly
     */
    readonly pASSporTSignature: OCTET_STRING;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pASSporTHeader: PASSporTHeader,
        pASSporTPayload: PASSporTPayload,
        pASSporTSignature: OCTET_STRING,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pASSporTHeader = pASSporTHeader;
        this.pASSporTPayload = pASSporTPayload;
        this.pASSporTSignature = pASSporTSignature;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PASSporT
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporT`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporT`.
     * @returns {PASSporT}
     */
    public static _from_object (_o: { [_K in keyof (PASSporT)]: (PASSporT)[_K] }): PASSporT {
        return new PASSporT(_o.pASSporTHeader, _o.pASSporTPayload, _o.pASSporTSignature, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporT: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTHeader", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pASSporTPayload", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pASSporTSignature", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporT: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporT: $.ASN1Decoder<PASSporT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporT (el: _Element): PASSporT {
    if (!_cached_decoder_for_PASSporT) { _cached_decoder_for_PASSporT = function (el: _Element): PASSporT {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PASSporT contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pASSporTHeader";
    sequence[1].name = "pASSporTPayload";
    sequence[2].name = "pASSporTSignature";
    let pASSporTHeader!: PASSporTHeader;
    let pASSporTPayload!: PASSporTPayload;
    let pASSporTSignature!: OCTET_STRING;
    pASSporTHeader = $._decode_implicit<PASSporTHeader>(() => _decode_PASSporTHeader)(sequence[0]);
    pASSporTPayload = $._decode_implicit<PASSporTPayload>(() => _decode_PASSporTPayload)(sequence[1]);
    pASSporTSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new PASSporT(
        pASSporTHeader,
        pASSporTPayload,
        pASSporTSignature,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_PASSporT(el);
}

let _cached_encoder_for_PASSporT: $.ASN1Encoder<PASSporT> | null = null;

/**
 * @summary Encodes a(n) PASSporT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporT, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporT (value: PASSporT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporT) { _cached_encoder_for_PASSporT = function (value: PASSporT, elGetter: $.ASN1Encoder<PASSporT>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PASSporTHeader, $.BER)(value.pASSporTHeader, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PASSporTPayload, $.BER)(value.pASSporTPayload, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pASSporTSignature, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PASSporT(value, elGetter);
}


/* eslint-enable */
