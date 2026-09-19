/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
// export { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
// export { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
import { PINProfile, _decode_PINProfile, _encode_PINProfile } from "../TS33128Payloads/PINProfile.ta.mjs";
// export { PINProfile, _decode_PINProfile, _encode_PINProfile } from "../TS33128Payloads/PINProfile.ta.mjs";


/**
 * @summary PINClientInPINS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PINClientInPINS ::= SEQUENCE
 * {
 *     pINEIdentities          [1] PINEIdentities,
 *     mACAddress              [2] MACAddress OPTIONAL,
 *     pINServerID             [3] PINServerID,
 *     pINClientProfile        [4] XMLType,
 *     pINProfiles             [5] SEQUENCE OF PINProfile
 * }
 * ```
 * 
 * @class
 */
export
class PINClientInPINS {
    constructor (
        /**
         * @summary `pINEIdentities`.
         * @public
         * @readonly
         */
        readonly pINEIdentities: PINEIdentities,
        /**
         * @summary `mACAddress`.
         * @public
         * @readonly
         */
        readonly mACAddress: OPTIONAL<MACAddress>,
        /**
         * @summary `pINServerID`.
         * @public
         * @readonly
         */
        readonly pINServerID: PINServerID,
        /**
         * @summary `pINClientProfile`.
         * @public
         * @readonly
         */
        readonly pINClientProfile: XMLType,
        /**
         * @summary `pINProfiles`.
         * @public
         * @readonly
         */
        readonly pINProfiles: PINProfile[]
    ) {}

    /**
     * @summary Restructures an object into a PINClientInPINS
     * @description
     * 
     * This takes an `object` and converts it to a `PINClientInPINS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PINClientInPINS`.
     * @returns {PINClientInPINS}
     */
    public static _from_object (_o: { [_K in keyof (PINClientInPINS)]: (PINClientInPINS)[_K] }): PINClientInPINS {
        return new PINClientInPINS(_o.pINEIdentities, _o.mACAddress, _o.pINServerID, _o.pINClientProfile, _o.pINProfiles);
    }


}

/**
 * @summary The Leading Root Component Types of PINClientInPINS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PINClientInPINS: $.ComponentSpec[] = [
    new $.ComponentSpec("pINEIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mACAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pINServerID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pINClientProfile", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pINProfiles", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PINClientInPINS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PINClientInPINS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PINClientInPINS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PINClientInPINS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PINClientInPINS: $.ASN1Decoder<PINClientInPINS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PINClientInPINS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PINClientInPINS (el: _Element): PINClientInPINS {
    if (!_cached_decoder_for_PINClientInPINS) { _cached_decoder_for_PINClientInPINS = function (el: _Element): PINClientInPINS {
    let pINEIdentities!: PINEIdentities;
    let mACAddress: OPTIONAL<MACAddress>;
    let pINServerID!: PINServerID;
    let pINClientProfile!: XMLType;
    let pINProfiles!: PINProfile[];
    const callbacks: $.DecodingMap = {
        "pINEIdentities": (_el: _Element): void => { pINEIdentities = $._decode_implicit<PINEIdentities>(() => _decode_PINEIdentities)(_el); },
        "mACAddress": (_el: _Element): void => { mACAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "pINServerID": (_el: _Element): void => { pINServerID = $._decode_implicit<PINServerID>(() => _decode_PINServerID)(_el); },
        "pINClientProfile": (_el: _Element): void => { pINClientProfile = $._decode_implicit<XMLType>(() => _decode_XMLType)(_el); },
        "pINProfiles": (_el: _Element): void => { pINProfiles = $._decode_implicit<PINProfile[]>(() => $._decodeSequenceOf<PINProfile>(() => _decode_PINProfile))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PINClientInPINS,
        _extension_additions_list_spec_for_PINClientInPINS,
        _root_component_type_list_2_spec_for_PINClientInPINS,
        undefined,
    );
    return new PINClientInPINS(
        pINEIdentities,
        mACAddress,
        pINServerID,
        pINClientProfile,
        pINProfiles
    );
}; }
    return _cached_decoder_for_PINClientInPINS(el);
}

let _cached_encoder_for_PINClientInPINS: $.ASN1Encoder<PINClientInPINS> | null = null;

/**
 * @summary Encodes a(n) PINClientInPINS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PINClientInPINS, encoded as an ASN.1 Element.
 */
export
function _encode_PINClientInPINS (value: PINClientInPINS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PINClientInPINS) { _cached_encoder_for_PINClientInPINS = function (value: PINClientInPINS, elGetter: $.ASN1Encoder<PINClientInPINS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PINEIdentities, $.BER)(value.pINEIdentities, $.BER),
            /* IF_ABSENT  */ ((value.mACAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_MACAddress, $.BER)(value.mACAddress, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PINServerID, $.BER)(value.pINServerID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_XMLType, $.BER)(value.pINClientProfile, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<PINProfile>(() => _encode_PINProfile, $.BER), $.BER)(value.pINProfiles, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PINClientInPINS(value, elGetter);
}


/* eslint-enable */
