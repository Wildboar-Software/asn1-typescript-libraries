/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../GCSEHI2Operations/IMSIdentity.ta.mjs";
// export { IMSIdentity, _decode_IMSIdentity, _encode_IMSIdentity } from "../GCSEHI2Operations/IMSIdentity.ta.mjs";
import { ProSeUEID, _decode_ProSeUEID, _encode_ProSeUEID } from "../GCSEHI2Operations/ProSeUEID.ta.mjs";
// export { ProSeUEID, _decode_ProSeUEID, _encode_ProSeUEID } from "../GCSEHI2Operations/ProSeUEID.ta.mjs";
import { OtherIdentity, _decode_OtherIdentity, _encode_OtherIdentity } from "../GCSEHI2Operations/OtherIdentity.ta.mjs";
// export { OtherIdentity, _decode_OtherIdentity, _encode_OtherIdentity } from "../GCSEHI2Operations/OtherIdentity.ta.mjs";


/**
 * @summary GcsePartyIdentity
 * @description
 * 
 * Identity of the target, of a group member or participant, or of a user who
 * was added or dropped. Provide at least one of IMEI, IMSI, ProSe UE ID, or
 * other identity, and any other that is available. 3GPP TS 33.108, clause
 * 14.2.6 and annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GcsePartyIdentity ::= SEQUENCE
 * {
 *         imei                    [1] OCTET STRING (SIZE (8)) OPTIONAL,
 *             -- See MAP format [4]
 * 
 *         imsi                    [2] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *             -- Station Identity E.212 number beginning with Mobile Country Code
 *         
 *         iMPU            [3]    SET OF IMSIdentity  OPTIONAL,
 * 
 *         iMPI            [4]    SET OF IMSIdentity  OPTIONAL,
 * 
 *         proseUEID        [6] SET OF ProSeUEID OPTIONAL,
 * 
 *         otherID            [7] OtherIdentity OPTIONAL,
 *         
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GcsePartyIdentity {
    /**
     * @summary `imei`.
     * @description
     * 
     * IMEI of the party. Eight octets in the MAP format of 3GPP TS 29.002,
     * reference 4 of 3GPP TS 33.108. 3GPP TS 33.108, annex B.14.1 and table
     * 14.2.
     * 
     * @public
     * @readonly
     */
    readonly imei: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `imsi`.
     * @description
     * 
     * IMSI of the party. MAP format of 3GPP TS 29.002, an E.212 number
     * beginning with the mobile country code, three to eight octets. 3GPP TS
     * 33.108, annex B.14.1 and table 14.2.
     * 
     * @public
     * @readonly
     */
    readonly imsi: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMPU`.
     * @description
     * 
     * IMS public user identities. Clause 14's identity tables list IMEI, IMSI,
     * ProSe UE ID, and other identity; they do not state when an IMPU is
     * required. 3GPP TS 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly iMPU: OPTIONAL<IMSIdentity[]>;
    /**
     * @summary `iMPI`.
     * @description
     * 
     * IMS private user identities. Clause 14's identity tables do not state
     * when an IMPI is required. 3GPP TS 33.108, annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly iMPI: OPTIONAL<IMSIdentity[]>;
    /**
     * @summary `proseUEID`.
     * @description
     * 
     * ProSe UE identity of the party. Stage 2 includes it among the target
     * identities to provide when available. Three octets, the source L2 ID of
     * the MAC PDU in 3GPP TS 25.321 (reference 85). 3GPP TS 33.108, annex
     * B.14.1 and tables 14.3 to 14.8.
     * 
     * @public
     * @readonly
     */
    readonly proseUEID: OPTIONAL<ProSeUEID[]>;
    /**
     * @summary `otherID`.
     * @description
     * 
     * Other identity of the target. Table 14.2 calls the observed other
     * identity the NAI. The encoding name and the octets are separate
     * components; the NAI layout itself is not defined. 3GPP TS 33.108, clause
     * 14.2.6 and annex B.14.1.
     * 
     * @public
     * @readonly
     */
    readonly otherID: OPTIONAL<OtherIdentity>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        imei?: OPTIONAL<OCTET_STRING>,
        imsi?: OPTIONAL<OCTET_STRING>,
        iMPU?: OPTIONAL<IMSIdentity[]>,
        iMPI?: OPTIONAL<IMSIdentity[]>,
        proseUEID?: OPTIONAL<ProSeUEID[]>,
        otherID?: OPTIONAL<OtherIdentity>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.imei = imei;
        this.imsi = imsi;
        this.iMPU = iMPU;
        this.iMPI = iMPI;
        this.proseUEID = proseUEID;
        this.otherID = otherID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a GcsePartyIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `GcsePartyIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GcsePartyIdentity`.
     * @returns {GcsePartyIdentity}
     */
    public static _from_object (_o: { [_K in keyof (GcsePartyIdentity)]: (GcsePartyIdentity)[_K] }): GcsePartyIdentity {
        return new GcsePartyIdentity(_o.imei, _o.imsi, _o.iMPU, _o.iMPI, _o.proseUEID, _o.otherID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GcsePartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GcsePartyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iMPU", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iMPI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("proseUEID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("otherID", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of GcsePartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GcsePartyIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GcsePartyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GcsePartyIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GcsePartyIdentity: $.ASN1Decoder<GcsePartyIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GcsePartyIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GcsePartyIdentity (el: _Element): GcsePartyIdentity {
    if (!_cached_decoder_for_GcsePartyIdentity) { _cached_decoder_for_GcsePartyIdentity = function (el: _Element): GcsePartyIdentity {
    let imei: OPTIONAL<OCTET_STRING>;
    let imsi: OPTIONAL<OCTET_STRING>;
    let iMPU: OPTIONAL<IMSIdentity[]>;
    let iMPI: OPTIONAL<IMSIdentity[]>;
    let proseUEID: OPTIONAL<ProSeUEID[]>;
    let otherID: OPTIONAL<OtherIdentity>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imei": (_el: _Element): void => {
            imei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (imei.length < 8 || imei.length > 8) {
                throw new ASN1SizeError("GcsePartyIdentity.imei violates SIZE constraint");
            }
        },
        "imsi": (_el: _Element): void => {
            imsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (imsi.length < 3 || imsi.length > 8) {
                throw new ASN1SizeError("GcsePartyIdentity.imsi violates SIZE constraint");
            }
        },
        "iMPU": (_el: _Element): void => { iMPU = $._decode_implicit<IMSIdentity[]>(() => $._decodeSetOf<IMSIdentity>(() => _decode_IMSIdentity))(_el); },
        "iMPI": (_el: _Element): void => { iMPI = $._decode_implicit<IMSIdentity[]>(() => $._decodeSetOf<IMSIdentity>(() => _decode_IMSIdentity))(_el); },
        "proseUEID": (_el: _Element): void => { proseUEID = $._decode_implicit<ProSeUEID[]>(() => $._decodeSetOf<ProSeUEID>(() => _decode_ProSeUEID))(_el); },
        "otherID": (_el: _Element): void => { otherID = $._decode_implicit<OtherIdentity>(() => _decode_OtherIdentity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GcsePartyIdentity,
        _extension_additions_list_spec_for_GcsePartyIdentity,
        _root_component_type_list_2_spec_for_GcsePartyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GcsePartyIdentity(
        imei,
        imsi,
        iMPU,
        iMPI,
        proseUEID,
        otherID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GcsePartyIdentity(el);
}

let _cached_encoder_for_GcsePartyIdentity: $.ASN1Encoder<GcsePartyIdentity> | null = null;

/**
 * @summary Encodes a(n) GcsePartyIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GcsePartyIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_GcsePartyIdentity (value: GcsePartyIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GcsePartyIdentity) { _cached_encoder_for_GcsePartyIdentity = function (value: GcsePartyIdentity, elGetter: $.ASN1Encoder<GcsePartyIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.imei !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.imei, $.BER);
    }
    if (value.imsi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.imsi, $.BER);
    }
    if (value.iMPU !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<IMSIdentity>(() => _encode_IMSIdentity, $.BER), $.BER)(value.iMPU, $.BER);
    }
    if (value.iMPI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSetOf<IMSIdentity>(() => _encode_IMSIdentity, $.BER), $.BER)(value.iMPI, $.BER);
    }
    if (value.proseUEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSetOf<ProSeUEID>(() => _encode_ProSeUEID, $.BER), $.BER)(value.proseUEID, $.BER);
    }
    if (value.otherID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_OtherIdentity, $.BER)(value.otherID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_GcsePartyIdentity(value, elGetter);
}


/* eslint-enable */
