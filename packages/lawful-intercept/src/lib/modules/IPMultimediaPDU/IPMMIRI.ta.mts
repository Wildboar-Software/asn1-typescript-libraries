/* eslint-disable */
import {
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPMultimediaPDU/IPIRIContents.ta.mjs";
// export { IPIRIContents, _decode_IPIRIContents, _encode_IPIRIContents } from "../IPMultimediaPDU/IPIRIContents.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../LI-PS-PDU/Location.ta.mjs";
import { AdditionalSignalling, _decode_AdditionalSignalling, _encode_AdditionalSignalling } from "../IPMultimediaPDU/AdditionalSignalling.ta.mjs";
import * as LI_PS_PDU from "../LI-PS-PDU/index.mjs";
// export { AdditionalSignalling, _decode_AdditionalSignalling, _encode_AdditionalSignalling } from "../IPMultimediaPDU/AdditionalSignalling.ta.mjs";


/**
 * @summary IPMMIRI
 * @description
 *
 * HI2 intercept-related information for one IP multimedia signalling
 * or control event.
 *
 * Every multimedia signalling and control message to or from the
 * target, or executed on behalf of the target, is sent to the
 * mediation function as an IRI record (clause 5.4). The target
 * identity is a service identity, not a network or transport address:
 * a TEL URI, SIP URI, or E.164 number for SIP (IMPU and IMPI are
 * examples); an H.323 URL, H.323 ID, or E.164 number for H.323. IMEI
 * or IMSI may be used when the CSP can map them (clause 5.1).
 *
 * IRI and CC of one communication session share one CIN, assigned on
 * the first IRI or CC message (clauses 5.3.0 and 6.1). A session is
 * one self-contained transaction, or a series of PDUs that form one
 * SIP or H.323 session. All SIP IRI for one call share that CIN;
 * related SIP legs are correlated, and one option given for that is
 * the P-Charging-Vector header (clause 5.3.1). All H.323 IRI for one
 * call share it; messages of one call carry the same H.225.0 Call ID
 * (clause 5.3.2). An XCAP HTTP request and its response share one CIN
 * (clause 5.3.3).
 *
 * The HI2 record type is chosen in the part 1 header, not in this
 * structure. Table 1 maps a new CIN to IRI-BEGIN or IRI-REPORT, later
 * events to IRI-CONTINUE or IRI-REPORT, and the end of the session to
 * IRI-END or IRI-REPORT. A session that started with IRI-REPORT stays
 * on IRI-REPORT, including its end. An event that arrives after an
 * end record is an IRI-REPORT with the same CIN. Unmapped events,
 * such as some encapsulated SIP messages, are IRI-REPORT (clause 5.4).
 *
 * Direction of one signalling message may be carried in
 * `payloadDirection` from ETSI TS 102 232-1, subject to national
 * agreement (clause 5.6): `fromTarget`, `toTarget`, or
 * `indeterminate`. `combined` and `notapplicable` are not used for a
 * signalling message unless a national agreement says so. SIP session
 * direction may be carried in `sessionDirection` (clause 5.7.1), taken
 * from the SIP message that caused the CIN to be allocated:
 * `toTarget` if that message was sent to the target, `fromTarget` if
 * it was sent from the target, `combined` if it was sent both ways,
 * and `indeterminate` if the direction is unreliable. `notapplicable`
 * is not used for a SIP session unless a national agreement says so.
 * Direction for H.323 sessions is not specified (clause 5.7.2).
 *
 * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5 and 6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223205/03.22.01_60/ts_10223205v032201p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPMMIRI ::= SEQUENCE
 * {
 *     iPMMIRIObjId                [0] RELATIVE-OID,
 *     iPMMIRIContents             [1] IPIRIContents,
 *     ...,
 *     targetLocation              [2] LI-PS-PDU.Location OPTIONAL,
 *         -- This common parameter is defined in ETSI TS 102 232-1 [2], the use of this parameter is described in clause 5.2.3
 *     additionalSignalling        [3] SEQUENCE OF AdditionalSignalling OPTIONAL
 *         -- The use of this parameter is defined in clause 5.2.5
 * }
 * ```
 * 
 * @class
 */
export
class IPMMIRI {
    /**
     * @summary `iPMMIRIObjId`.
     * @description
     *
     * Set to `iPMMIRIObjId`, `{iPMultimediaPDUObjId iRI(1)}`.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 7.
     *
     * @public
     * @readonly
     */
    readonly iPMMIRIObjId: RELATIVE_OID;
    /**
     * @summary `iPMMIRIContents`.
     * @description
     *
     * The intercepted signalling for this event, an IRI-only copy whose
     * message body was modified, a post-dialled-digit RTP packet, an
     * XCAP message, or national parameters.
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2 and 5.4.
     *
     * @public
     * @readonly
     */
    readonly iPMMIRIContents: IPIRIContents;
    /**
     * @summary `targetLocation`.
     * @description
     *
     * Location of the target, using the common `Location` parameter
     * from ETSI TS 102 232-1. The IRI IIF may include it to meet annex
     * B.3. Whether it is available, and whether it is geographic,
     * physical, or logical, depends on the access technology. Use is
     * subject to national agreement. Location may also be reported on
     * a change of location that is unrelated to a communication
     * (annex B.2, item d.6).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clauses 5.2.3 and B.3.
     *
     * @public
     * @readonly
     */
    readonly targetLocation: OPTIONAL<LI_PS_PDU.Location>;
    /**
     * @summary `additionalSignalling`.
     * @description
     *
     * SIP header lines supplied in addition to the intercepted
     * signalling, without modifying that signalling. The network may
     * obtain them by means other than the intercepted message. Each
     * value is one header line, formatted as required by the
     * specification that defines the header (IETF RFC 3261, IETF RFC
     * 5322, or another specification selected by national agreement).
     *
     * ETSI TS 102 232-5 V3.22.1 (2025-11), clause 5.2.5.
     *
     * @public
     * @readonly
     */
    readonly additionalSignalling: OPTIONAL<AdditionalSignalling[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPMMIRIObjId: RELATIVE_OID,
        iPMMIRIContents: IPIRIContents,
        targetLocation: OPTIONAL<LI_PS_PDU.Location>,
        additionalSignalling: OPTIONAL<AdditionalSignalling[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPMMIRIObjId = iPMMIRIObjId;
        this.iPMMIRIContents = iPMMIRIContents;
        this.targetLocation = targetLocation;
        this.additionalSignalling = additionalSignalling;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPMMIRI
     * @description
     * 
     * This takes an `object` and converts it to a `IPMMIRI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMMIRI`.
     * @returns {IPMMIRI}
     */
    public static _from_object (_o: { [_K in keyof (IPMMIRI)]: (IPMMIRI)[_K] }): IPMMIRI {
        return new IPMMIRI(_o.iPMMIRIObjId, _o.iPMMIRIContents, _o.targetLocation, _o.additionalSignalling, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPMMIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("iPMMIRIObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPMMIRIContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPMMIRI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPMMIRI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPMMIRI: $.ComponentSpec[] = [
    new $.ComponentSpec("targetLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("additionalSignalling", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_IPMMIRI: $.ASN1Decoder<IPMMIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMMIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPMMIRI (el: _Element): IPMMIRI {
    if (!_cached_decoder_for_IPMMIRI) { _cached_decoder_for_IPMMIRI = function (el: _Element): IPMMIRI {
    let iPMMIRIObjId!: RELATIVE_OID;
    let iPMMIRIContents!: IPIRIContents;
    let targetLocation: OPTIONAL<LI_PS_PDU.Location>;
    let additionalSignalling: OPTIONAL<AdditionalSignalling[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPMMIRIObjId": (_el: _Element): void => { iPMMIRIObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "iPMMIRIContents": (_el: _Element): void => { iPMMIRIContents = $._decode_explicit<IPIRIContents>(() => _decode_IPIRIContents)(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = $._decode_implicit<LI_PS_PDU.Location>(() => LI_PS_PDU._decode_Location)(_el); },
        "additionalSignalling": (_el: _Element): void => { additionalSignalling = $._decode_implicit<AdditionalSignalling[]>(() => $._decodeSequenceOf<AdditionalSignalling>(() => _decode_AdditionalSignalling))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPMMIRI,
        _extension_additions_list_spec_for_IPMMIRI,
        _root_component_type_list_2_spec_for_IPMMIRI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPMMIRI(
        iPMMIRIObjId,
        iPMMIRIContents,
        targetLocation,
        additionalSignalling,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPMMIRI(el);
}

let _cached_encoder_for_IPMMIRI: $.ASN1Encoder<IPMMIRI> | null = null;

/**
 * @summary Encodes a(n) IPMMIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMMIRI, encoded as an ASN.1 Element.
 */
export
function _encode_IPMMIRI (value: IPMMIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPMMIRI) { _cached_encoder_for_IPMMIRI = function (value: IPMMIRI, elGetter: $.ASN1Encoder<IPMMIRI>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPMMIRIObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPIRIContents, $.BER)(value.iPMMIRIContents, $.BER);
    if (value.targetLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => LI_PS_PDU._encode_Location, $.BER)(value.targetLocation, $.BER);
    }
    if (value.additionalSignalling !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AdditionalSignalling>(() => _encode_AdditionalSignalling, $.BER), $.BER)(value.additionalSignalling, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPMMIRI(value, elGetter);
}


/* eslint-enable */
