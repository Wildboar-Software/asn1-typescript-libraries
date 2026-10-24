/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
import { MMEGroupID, _decode_MMEGroupID, _encode_MMEGroupID } from "../TS33128Payloads/MMEGroupID.ta.mjs";
// export { MMEGroupID, _decode_MMEGroupID, _encode_MMEGroupID } from "../TS33128Payloads/MMEGroupID.ta.mjs";
import { MMECode, _decode_MMECode, _encode_MMECode } from "../TS33128Payloads/MMECode.ta.mjs";
// export { MMECode, _decode_MMECode, _encode_MMECode } from "../TS33128Payloads/MMECode.ta.mjs";
import { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../TS33128Payloads/TMSI.ta.mjs";


/**
 * @summary GUTI
 * @description
 * 
 * The GUTI type is derived from the data present in the Globally Unique
 * Temporary User Identity type defined in TS 23.003 [19] clause 2.8.
 *
 * 3GPP TS 33.128, clause 8.3.8.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GUTI ::= SEQUENCE
 * {
 *     mCC          [1] MCC,
 *     mNC          [2] MNC,
 *     mMEGroupID   [3] MMEGroupID,
 *     mMECode      [4] MMECode,
 *     mTMSI        [5] TMSI
 * }
 * ```
 * 
 * @class
 */
export
class GUTI {
    /**
     * @summary `mCC`.
     * @description
     *
     * The mobile country code identifying the country of the home network for
     * the subscriber.
     *
     * 3GPP TS 33.128, clause 8.3.8.
     *
     * @public
     * @readonly
     */
    readonly mCC: MCC;
    /**
     * @summary `mNC`.
     * @description
     *
     * The mobile network code identifying the PLMN of the home network of the
     * subscriber.
     *
     * 3GPP TS 33.128, clause 8.3.8.
     *
     * @public
     * @readonly
     */
    readonly mNC: MNC;
    /**
     * @summary `mMEGroupID`.
     * @description
     *
     * The identifier for the MME Group.
     *
     * 3GPP TS 33.128, clause 8.3.8.
     *
     * @public
     * @readonly
     */
    readonly mMEGroupID: MMEGroupID;
    /**
     * @summary `mMECode`.
     * @description
     *
     * Identifies the MME that issued the GUTI.
     *
     * 3GPP TS 33.128, clause 8.3.8.
     *
     * @public
     * @readonly
     */
    readonly mMECode: MMECode;
    /**
     * @summary `mTMSI`.
     * @description
     *
     * The temporary Identifier for the UE to uniquely identify it within the
     * MME.
     *
     * 3GPP TS 33.128, clause 8.3.8.
     *
     * @public
     * @readonly
     */
    readonly mTMSI: TMSI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCC: MCC,
        mNC: MNC,
        mMEGroupID: MMEGroupID,
        mMECode: MMECode,
        mTMSI: TMSI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCC = mCC;
        this.mNC = mNC;
        this.mMEGroupID = mMEGroupID;
        this.mMECode = mMECode;
        this.mTMSI = mTMSI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GUTI
     * @description
     * 
     * This takes an `object` and converts it to a `GUTI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GUTI`.
     * @returns {GUTI}
     */
    public static _from_object (_o: { [_K in keyof (GUTI)]: (GUTI)[_K] }): GUTI {
        return new GUTI(_o.mCC, _o.mNC, _o.mMEGroupID, _o.mMECode, _o.mTMSI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GUTI: $.ComponentSpec[] = [
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mMEGroupID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mMECode", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("mTMSI", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GUTI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GUTI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GUTI: $.ASN1Decoder<GUTI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GUTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GUTI (el: _Element): GUTI {
    if (!_cached_decoder_for_GUTI) { _cached_decoder_for_GUTI = function (el: _Element): GUTI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("GUTI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCC";
    sequence[1].name = "mNC";
    sequence[2].name = "mMEGroupID";
    sequence[3].name = "mMECode";
    sequence[4].name = "mTMSI";
    let mCC!: MCC;
    let mNC!: MNC;
    let mMEGroupID!: MMEGroupID;
    let mMECode!: MMECode;
    let mTMSI!: TMSI;
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[0]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[1]);
    mMEGroupID = $._decode_implicit<MMEGroupID>(() => _decode_MMEGroupID)(sequence[2]);
    mMECode = $._decode_implicit<MMECode>(() => _decode_MMECode)(sequence[3]);
    mTMSI = $._decode_implicit<TMSI>(() => _decode_TMSI)(sequence[4]);
    return new GUTI(
        mCC,
        mNC,
        mMEGroupID,
        mMECode,
        mTMSI,
        sequence.slice(5),
    );
}; }
    return _cached_decoder_for_GUTI(el);
}

let _cached_encoder_for_GUTI: $.ASN1Encoder<GUTI> | null = null;

/**
 * @summary Encodes a(n) GUTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GUTI, encoded as an ASN.1 Element.
 */
export
function _encode_GUTI (value: GUTI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GUTI) { _cached_encoder_for_GUTI = function (value: GUTI, elGetter: $.ASN1Encoder<GUTI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCC, $.BER)(value.mCC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MNC, $.BER)(value.mNC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_MMEGroupID, $.BER)(value.mMEGroupID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMECode, $.BER)(value.mMECode, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TMSI, $.BER)(value.mTMSI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GUTI(value, elGetter);
}


/* eslint-enable */
