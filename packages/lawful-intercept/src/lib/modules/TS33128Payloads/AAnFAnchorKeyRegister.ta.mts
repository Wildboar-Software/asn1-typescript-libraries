/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { type SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { type KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";
// export { KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";


/**
 * @summary AAnFAnchorKeyRegister
 * @description
 * 
 * The IRI-POI in the AAnF shall generate an xIRI containing an
 * AAnFAnchorKeyRegister record when the IRI-POI present in the AAnF detects
 * reception of an AKMA-context, i.e. an (A-KID, KAKMA)-pair associated with a
 * target, from the AUSF, see TS 33.535 [65] clause 7.1.2.
 *
 * Table 7.9.1.5-1 gives the LI_HI2 IRI message type for this record as BEGIN.
 *
 * 3GPP TS 33.128, clause 7.9.1.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFAnchorKeyRegister ::= SEQUENCE
 * {
 *     aKID                  [1] NAI,
 *     sUPI                  [2] SUPI,
 *     kAKMA                 [3] KAKMA OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AAnFAnchorKeyRegister {
    /**
     * @summary `aKID`.
     * @description
     *
     * AKMA Anchor Key Identifier (see TS 33.535 [65] clause 4.4.2).
     *
     * 3GPP TS 33.128, clause 7.9.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly aKID: NAI;
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the A-KID.
     *
     * 3GPP TS 33.128, clause 7.9.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `kAKMA`.
     * @description
     *
     * AKMA Anchor Key (see TS 33.535 [65] clause 5.1). Shall be included if
     * available. NOTE: Whether kAKMA is included could also depend on whether
     * provisioning is general or service specific.
     *
     * 3GPP TS 33.128, clause 7.9.1.3.2.
     *
     * @public
     * @readonly
     */
    readonly kAKMA: OPTIONAL<KAKMA>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aKID: NAI,
        sUPI: SUPI,
        kAKMA?: OPTIONAL<KAKMA>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aKID = aKID;
        this.sUPI = sUPI;
        this.kAKMA = kAKMA;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AAnFAnchorKeyRegister
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFAnchorKeyRegister`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFAnchorKeyRegister`.
     * @returns {AAnFAnchorKeyRegister}
     */
    public static _from_object (_o: { [_K in keyof (AAnFAnchorKeyRegister)]: (AAnFAnchorKeyRegister)[_K] }): AAnFAnchorKeyRegister {
        return new AAnFAnchorKeyRegister(_o.aKID, _o.sUPI, _o.kAKMA, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAKMA", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFAnchorKeyRegister: $.ASN1Decoder<AAnFAnchorKeyRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFAnchorKeyRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFAnchorKeyRegister (el: _Element): AAnFAnchorKeyRegister {
    if (!_cached_decoder_for_AAnFAnchorKeyRegister) { _cached_decoder_for_AAnFAnchorKeyRegister = function (el: _Element): AAnFAnchorKeyRegister {
    let aKID!: NAI;
    let sUPI!: SUPI;
    let kAKMA: OPTIONAL<KAKMA>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aKID": (_el: _Element): void => { aKID = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "kAKMA": (_el: _Element): void => { kAKMA = $._decode_implicit<KAKMA>(() => _decode_KAKMA)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AAnFAnchorKeyRegister,
        _extension_additions_list_spec_for_AAnFAnchorKeyRegister,
        _root_component_type_list_2_spec_for_AAnFAnchorKeyRegister,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AAnFAnchorKeyRegister(
        aKID,
        sUPI,
        kAKMA,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AAnFAnchorKeyRegister(el);
}

let _cached_encoder_for_AAnFAnchorKeyRegister: $.ASN1Encoder<AAnFAnchorKeyRegister> | null = null;

/**
 * @summary Encodes a(n) AAnFAnchorKeyRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFAnchorKeyRegister, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFAnchorKeyRegister (value: AAnFAnchorKeyRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFAnchorKeyRegister) { _cached_encoder_for_AAnFAnchorKeyRegister = function (value: AAnFAnchorKeyRegister, elGetter: $.ASN1Encoder<AAnFAnchorKeyRegister>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.kAKMA !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAKMA, $.BER)(value.kAKMA, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AAnFAnchorKeyRegister(value, elGetter);
}


/* eslint-enable */
