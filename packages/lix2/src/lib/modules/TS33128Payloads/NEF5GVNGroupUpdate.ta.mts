/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary NEF5GVNGroupUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEF5GVNGroupUpdate ::= SEQUENCE
 * {
 *     aFID                             [1] AFID,
 *     gPSI                             [2] GPSI,
 *     fiveGLanParametersProvision      [3] SBIType OPTIONAL,
 *     fiveGLanParametersProvisionPatch [4] SBIType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NEF5GVNGroupUpdate {
    constructor (
        /**
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `fiveGLanParametersProvision`.
         * @public
         * @readonly
         */
        readonly fiveGLanParametersProvision: OPTIONAL<SBIType>,
        /**
         * @summary `fiveGLanParametersProvisionPatch`.
         * @public
         * @readonly
         */
        readonly fiveGLanParametersProvisionPatch: OPTIONAL<SBIType>
    ) {}

    /**
     * @summary Restructures an object into a NEF5GVNGroupUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `NEF5GVNGroupUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEF5GVNGroupUpdate`.
     * @returns {NEF5GVNGroupUpdate}
     */
    public static _from_object (_o: { [_K in keyof (NEF5GVNGroupUpdate)]: (NEF5GVNGroupUpdate)[_K] }): NEF5GVNGroupUpdate {
        return new NEF5GVNGroupUpdate(_o.aFID, _o.gPSI, _o.fiveGLanParametersProvision, _o.fiveGLanParametersProvisionPatch);
    }


}

/**
 * @summary The Leading Root Component Types of NEF5GVNGroupUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEF5GVNGroupUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGLanParametersProvision", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("fiveGLanParametersProvisionPatch", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NEF5GVNGroupUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEF5GVNGroupUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEF5GVNGroupUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEF5GVNGroupUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEF5GVNGroupUpdate: $.ASN1Decoder<NEF5GVNGroupUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEF5GVNGroupUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEF5GVNGroupUpdate (el: _Element): NEF5GVNGroupUpdate {
    if (!_cached_decoder_for_NEF5GVNGroupUpdate) { _cached_decoder_for_NEF5GVNGroupUpdate = function (el: _Element): NEF5GVNGroupUpdate {
    let aFID!: AFID;
    let gPSI!: GPSI;
    let fiveGLanParametersProvision: OPTIONAL<SBIType>;
    let fiveGLanParametersProvisionPatch: OPTIONAL<SBIType>;
    const callbacks: $.DecodingMap = {
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "fiveGLanParametersProvision": (_el: _Element): void => { fiveGLanParametersProvision = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); },
        "fiveGLanParametersProvisionPatch": (_el: _Element): void => { fiveGLanParametersProvisionPatch = $._decode_implicit<SBIType>(() => _decode_SBIType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEF5GVNGroupUpdate,
        _extension_additions_list_spec_for_NEF5GVNGroupUpdate,
        _root_component_type_list_2_spec_for_NEF5GVNGroupUpdate,
        undefined,
    );
    return new NEF5GVNGroupUpdate(
        aFID,
        gPSI,
        fiveGLanParametersProvision,
        fiveGLanParametersProvisionPatch
    );
}; }
    return _cached_decoder_for_NEF5GVNGroupUpdate(el);
}

let _cached_encoder_for_NEF5GVNGroupUpdate: $.ASN1Encoder<NEF5GVNGroupUpdate> | null = null;

/**
 * @summary Encodes a(n) NEF5GVNGroupUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEF5GVNGroupUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_NEF5GVNGroupUpdate (value: NEF5GVNGroupUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEF5GVNGroupUpdate) { _cached_encoder_for_NEF5GVNGroupUpdate = function (value: NEF5GVNGroupUpdate, elGetter: $.ASN1Encoder<NEF5GVNGroupUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* IF_ABSENT  */ ((value.fiveGLanParametersProvision === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER)(value.fiveGLanParametersProvision, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGLanParametersProvisionPatch === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER)(value.fiveGLanParametersProvisionPatch, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEF5GVNGroupUpdate(value, elGetter);
}


/* eslint-enable */
