/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
// export { MCC, _decode_MCC, _encode_MCC } from "../TS33128Payloads/MCC.ta.mjs";
import { type MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
// export { MNC, _decode_MNC, _encode_MNC } from "../TS33128Payloads/MNC.ta.mjs";
import { type AMFRegionID, _decode_AMFRegionID, _encode_AMFRegionID } from "../TS33128Payloads/AMFRegionID.ta.mjs";
// export { AMFRegionID, _decode_AMFRegionID, _encode_AMFRegionID } from "../TS33128Payloads/AMFRegionID.ta.mjs";
import { type AMFSetID, _decode_AMFSetID, _encode_AMFSetID } from "../TS33128Payloads/AMFSetID.ta.mjs";
// export { AMFSetID, _decode_AMFSetID, _encode_AMFSetID } from "../TS33128Payloads/AMFSetID.ta.mjs";
import { type AMFPointer, _decode_AMFPointer, _encode_AMFPointer } from "../TS33128Payloads/AMFPointer.ta.mjs";
// export { AMFPointer, _decode_AMFPointer, _encode_AMFPointer } from "../TS33128Payloads/AMFPointer.ta.mjs";
import { type FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";
// export { FiveGTMSI, _decode_FiveGTMSI, _encode_FiveGTMSI } from "../TS33128Payloads/FiveGTMSI.ta.mjs";


/**
 * @summary FiveGGUTI
 * @description
 * 
 * The FiveGGUTI type is derived from the data present in the 5G Globally Unique
 * Temporary User Identity type defined in TS 23.003 [19] clause 2.10.
 *
 * 3GPP TS 33.128, clause 8.3.9.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGGUTI ::= SEQUENCE
 * {
 *     mCC         [1] MCC,
 *     mNC         [2] MNC,
 *     aMFRegionID [3] AMFRegionID,
 *     aMFSetID    [4] AMFSetID,
 *     aMFPointer  [5] AMFPointer,
 *     fiveGTMSI   [6] FiveGTMSI
 * }
 * ```
 * 
 * @class
 */
export
class FiveGGUTI {
    /**
     * @summary `mCC`.
     * @description
     *
     * The mobile country code identifying the country of the home network for
     * the subscriber.
     *
     * 3GPP TS 33.128, clause 8.3.9.
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
     * 3GPP TS 33.128, clause 8.3.9.
     *
     * @public
     * @readonly
     */
    readonly mNC: MNC;
    /**
     * @summary `aMFRegionID`.
     * @description
     *
     * The identifier for the AMF Region.
     *
     * 3GPP TS 33.128, clause 8.3.9.
     *
     * @public
     * @readonly
     */
    readonly aMFRegionID: AMFRegionID;
    /**
     * @summary `aMFSetID`.
     * @description
     *
     * Identifies the AMF Set the AMF belongs to.
     *
     * 3GPP TS 33.128, clause 8.3.9.
     *
     * @public
     * @readonly
     */
    readonly aMFSetID: AMFSetID;
    /**
     * @summary `aMFPointer`.
     * @description
     *
     * Identifies the AMF.
     *
     * 3GPP TS 33.128, clause 8.3.9.
     *
     * @public
     * @readonly
     */
    readonly aMFPointer: AMFPointer;
    /**
     * @summary `fiveGTMSI`.
     * @description
     *
     * The temporary Identifier for the UE to uniquely identify it within the
     * AMF.
     *
     * 3GPP TS 33.128, clause 8.3.9.
     *
     * @public
     * @readonly
     */
    readonly fiveGTMSI: FiveGTMSI;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mCC: MCC,
        mNC: MNC,
        aMFRegionID: AMFRegionID,
        aMFSetID: AMFSetID,
        aMFPointer: AMFPointer,
        fiveGTMSI: FiveGTMSI,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mCC = mCC;
        this.mNC = mNC;
        this.aMFRegionID = aMFRegionID;
        this.aMFSetID = aMFSetID;
        this.aMFPointer = aMFPointer;
        this.fiveGTMSI = fiveGTMSI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGGUTI
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGGUTI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGGUTI`.
     * @returns {FiveGGUTI}
     */
    public static _from_object (_o: { [_K in keyof (FiveGGUTI)]: (FiveGGUTI)[_K] }): FiveGGUTI {
        return new FiveGGUTI(_o.mCC, _o.mNC, _o.aMFRegionID, _o.aMFSetID, _o.aMFPointer, _o.fiveGTMSI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGGUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGGUTI: $.ComponentSpec[] = [
    new $.ComponentSpec("mCC", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mNC", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("aMFRegionID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aMFSetID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("aMFPointer", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("fiveGTMSI", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of FiveGGUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGGUTI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGGUTI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGGUTI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGGUTI: $.ASN1Decoder<FiveGGUTI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGGUTI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGGUTI (el: _Element): FiveGGUTI {
    if (!_cached_decoder_for_FiveGGUTI) { _cached_decoder_for_FiveGGUTI = function (el: _Element): FiveGGUTI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("FiveGGUTI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mCC";
    sequence[1].name = "mNC";
    sequence[2].name = "aMFRegionID";
    sequence[3].name = "aMFSetID";
    sequence[4].name = "aMFPointer";
    sequence[5].name = "fiveGTMSI";
    let mCC!: MCC;
    let mNC!: MNC;
    let aMFRegionID!: AMFRegionID;
    let aMFSetID!: AMFSetID;
    let aMFPointer!: AMFPointer;
    let fiveGTMSI!: FiveGTMSI;
    mCC = $._decode_implicit<MCC>(() => _decode_MCC)(sequence[0]);
    mNC = $._decode_implicit<MNC>(() => _decode_MNC)(sequence[1]);
    aMFRegionID = $._decode_implicit<AMFRegionID>(() => _decode_AMFRegionID)(sequence[2]);
    aMFSetID = $._decode_implicit<AMFSetID>(() => _decode_AMFSetID)(sequence[3]);
    aMFPointer = $._decode_implicit<AMFPointer>(() => _decode_AMFPointer)(sequence[4]);
    fiveGTMSI = $._decode_implicit<FiveGTMSI>(() => _decode_FiveGTMSI)(sequence[5]);
    return new FiveGGUTI(
        mCC,
        mNC,
        aMFRegionID,
        aMFSetID,
        aMFPointer,
        fiveGTMSI,
        sequence.slice(6),
    );
}; }
    return _cached_decoder_for_FiveGGUTI(el);
}

let _cached_encoder_for_FiveGGUTI: $.ASN1Encoder<FiveGGUTI> | null = null;

/**
 * @summary Encodes a(n) FiveGGUTI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGGUTI, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGGUTI (value: FiveGGUTI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGGUTI) { _cached_encoder_for_FiveGGUTI = function (value: FiveGGUTI, elGetter: $.ASN1Encoder<FiveGGUTI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MCC, $.BER)(value.mCC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MNC, $.BER)(value.mNC, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AMFRegionID, $.BER)(value.aMFRegionID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AMFSetID, $.BER)(value.aMFSetID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_AMFPointer, $.BER)(value.aMFPointer, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_FiveGTMSI, $.BER)(value.fiveGTMSI, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGGUTI(value, elGetter);
}


/* eslint-enable */
