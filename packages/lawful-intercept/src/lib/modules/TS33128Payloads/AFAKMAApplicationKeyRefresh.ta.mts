/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
// export { KAF, _decode_KAF, _encode_KAF } from "../TS33128Payloads/KAF.ta.mjs";
import { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";
// export { UAStarParams, _decode_UAStarParams, _encode_UAStarParams } from "../TS33128Payloads/UAStarParams.ta.mjs";


/**
 * @summary AFAKMAApplicationKeyRefresh
 * @description
 * 
 * The IRI-POI in the AF shall generate an xIRI containing an
 * AFAKMApplicationKeyRefresh record when the IRI-POI present in the AF detects
 * that a KAF-key previously obtained from an AAnF is being locally refreshed by
 * the Ua* security protocol in use, see TS 33.535 [65] clause 6.4.3.
 *
 * Table 7.9.1.5-2 gives the LI_HI2 IRI message type for this record as
 * CONTINUE.
 *
 * 3GPP TS 33.128, clause 7.9.1.4.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AFAKMAApplicationKeyRefresh ::= SEQUENCE
 * {
 *     aFID                  [1] AFID,
 *     aKID                  [2] NAI,
 *     kAF                   [3] KAF,
 *     uaStarParams          [4] UAStarParams OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AFAKMAApplicationKeyRefresh {
    /**
     * @summary `aFID`.
     * @description
     *
     * AKMA AF identifier.
     *
     * 3GPP TS 33.128, clause 7.9.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly aFID: AFID;
    /**
     * @summary `aKID`.
     * @description
     *
     * AKMA Anchor Key Identifier.
     *
     * 3GPP TS 33.128, clause 7.9.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly aKID: NAI;
    /**
     * @summary `kAF`.
     * @description
     *
     * New value of the AF-specific key, after refresh.
     *
     * 3GPP TS 33.128, clause 7.9.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly kAF: KAF;
    /**
     * @summary `uaStarParams`.
     * @description
     *
     * Set of new Ua* security protocol parameters associated with kAF, if
     * updated.
     *
     * 3GPP TS 33.128, clause 7.9.1.4.2.
     *
     * @public
     * @readonly
     */
    readonly uaStarParams: OPTIONAL<UAStarParams>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        aFID: AFID,
        aKID: NAI,
        kAF: KAF,
        uaStarParams?: OPTIONAL<UAStarParams>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aFID = aFID;
        this.aKID = aKID;
        this.kAF = kAF;
        this.uaStarParams = uaStarParams;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AFAKMAApplicationKeyRefresh
     * @description
     * 
     * This takes an `object` and converts it to a `AFAKMAApplicationKeyRefresh`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AFAKMAApplicationKeyRefresh`.
     * @returns {AFAKMAApplicationKeyRefresh}
     */
    public static _from_object (_o: { [_K in keyof (AFAKMAApplicationKeyRefresh)]: (AFAKMAApplicationKeyRefresh)[_K] }): AFAKMAApplicationKeyRefresh {
        return new AFAKMAApplicationKeyRefresh(_o.aFID, _o.aKID, _o.kAF, _o.uaStarParams, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAF", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uaStarParams", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AFAKMAApplicationKeyRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AFAKMAApplicationKeyRefresh: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AFAKMAApplicationKeyRefresh: $.ASN1Decoder<AFAKMAApplicationKeyRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AFAKMAApplicationKeyRefresh
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AFAKMAApplicationKeyRefresh (el: _Element): AFAKMAApplicationKeyRefresh {
    if (!_cached_decoder_for_AFAKMAApplicationKeyRefresh) { _cached_decoder_for_AFAKMAApplicationKeyRefresh = function (el: _Element): AFAKMAApplicationKeyRefresh {
    let aFID!: AFID;
    let aKID!: NAI;
    let kAF!: KAF;
    let uaStarParams: OPTIONAL<UAStarParams>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "aKID": (_el: _Element): void => { aKID = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "kAF": (_el: _Element): void => { kAF = $._decode_implicit<KAF>(() => _decode_KAF)(_el); },
        "uaStarParams": (_el: _Element): void => { uaStarParams = $._decode_explicit<UAStarParams>(() => _decode_UAStarParams)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AFAKMAApplicationKeyRefresh,
        _extension_additions_list_spec_for_AFAKMAApplicationKeyRefresh,
        _root_component_type_list_2_spec_for_AFAKMAApplicationKeyRefresh,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AFAKMAApplicationKeyRefresh(
        aFID,
        aKID,
        kAF,
        uaStarParams,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AFAKMAApplicationKeyRefresh(el);
}

let _cached_encoder_for_AFAKMAApplicationKeyRefresh: $.ASN1Encoder<AFAKMAApplicationKeyRefresh> | null = null;

/**
 * @summary Encodes a(n) AFAKMAApplicationKeyRefresh into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AFAKMAApplicationKeyRefresh, encoded as an ASN.1 Element.
 */
export
function _encode_AFAKMAApplicationKeyRefresh (value: AFAKMAApplicationKeyRefresh, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AFAKMAApplicationKeyRefresh) { _cached_encoder_for_AFAKMAApplicationKeyRefresh = function (value: AFAKMAApplicationKeyRefresh, elGetter: $.ASN1Encoder<AFAKMAApplicationKeyRefresh>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER)(value.aKID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_KAF, $.BER)(value.kAF, $.BER);
    if (value.uaStarParams !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_UAStarParams, $.BER)(value.uaStarParams, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AFAKMAApplicationKeyRefresh(value, elGetter);
}


/* eslint-enable */
