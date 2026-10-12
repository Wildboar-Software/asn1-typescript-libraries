/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL,
    RELATIVE_OID
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_FrameType, _encode_FrameType, _enum_for_FrameType, FrameType } from "../IPMultimediaPDU/FrameType.ta.mjs";
// export { FrameType, _enum_for_FrameType, FrameType_ipFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, ipFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_udpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, udpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_rtpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, rtpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_audioFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, audioFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_tcpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, tcpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_artificialRtpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, artificialRtpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_udptlFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, udptlFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, FrameType_msrpFrame /* IMPORTED_LONG_ENUMERATION_ITEM */, msrpFrame /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FrameType, _encode_FrameType } from "../IPMultimediaPDU/FrameType.ta.mjs";
import { _decode_MMCCprotocol, _encode_MMCCprotocol, _enum_for_MMCCprotocol, MMCCprotocol } from "../IPMultimediaPDU/MMCCprotocol.ta.mjs";
// export { MMCCprotocol, _enum_for_MMCCprotocol, MMCCprotocol_rTP /* IMPORTED_LONG_ENUMERATION_ITEM */, rTP /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMCCprotocol_mSRP /* IMPORTED_LONG_ENUMERATION_ITEM */, mSRP /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMCCprotocol_uDPTL /* IMPORTED_LONG_ENUMERATION_ITEM */, uDPTL /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMCCprotocol, _encode_MMCCprotocol } from "../IPMultimediaPDU/MMCCprotocol.ta.mjs";


/**
 * @summary IPMMCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPMMCC ::= SEQUENCE
 * {
 *     iPMMCCObjId                 [0] RELATIVE-OID,
 *     mMCCContents                [1] OCTET STRING,
 *         -- Copy of the multimediastream, i.e. all related RTP/RTCP, UDPTL or MSRP packets
 *         -- Each IPMMCC shall contain one intercepted packet
 *         -- Protocol of the multimedia packets is indicated by means of mMCCprotocol parameter
 *         -- mMCCContents was called rTPCCContents in earlier versions until v2.3.2.
 *     ...,
 *     frameType                   [2] FrameType OPTIONAL,
 *         -- The availability of header information shall be signalled with the frameType parameter
 *         -- The module is defined as OPTIONAL because of backwards compatibility reasons
 *         -- For new implementations the module is MANDATORY to be used as defined in clause 5.5
 *     streamIdentifier            [3] OCTET STRING OPTIONAL,
 *         -- Used to identify the media stream within the current CIN, typically in case of
 *         -- multiple media streams communications
 *         -- May be used to correlate each media stream with the relevant SDP media description of IRI
 *         -- May contain c= and m= lines extracts for instance
 *     mMCCprotocol                [4] MMCCprotocol OPTIONAL
 *         -- Used to identify the protocol of packets sent in MMCCContent (RTP, UDPTL, MSRP, etc.)
 *         -- Absence means mMCCContents contains RTP/RTCP packets or audio frame as indicated by the
 *         -- frameType parameter.
 * 
 * }
 * ```
 * 
 * @class
 */
export
class IPMMCC {
    /**
     * @summary `iPMMCCObjId`.
     * @public
     * @readonly
     */
    readonly iPMMCCObjId: RELATIVE_OID;
    /**
     * @summary `mMCCContents`.
     * @public
     * @readonly
     */
    readonly mMCCContents: OCTET_STRING;
    /**
     * @summary `frameType`.
     * @public
     * @readonly
     */
    readonly frameType: OPTIONAL<FrameType>;
    /**
     * @summary `streamIdentifier`.
     * @public
     * @readonly
     */
    readonly streamIdentifier: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMCCprotocol`.
     * @public
     * @readonly
     */
    readonly mMCCprotocol: OPTIONAL<MMCCprotocol>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPMMCCObjId: RELATIVE_OID,
        mMCCContents: OCTET_STRING,
        frameType: OPTIONAL<FrameType>,
        streamIdentifier: OPTIONAL<OCTET_STRING>,
        mMCCprotocol: OPTIONAL<MMCCprotocol>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPMMCCObjId = iPMMCCObjId;
        this.mMCCContents = mMCCContents;
        this.frameType = frameType;
        this.streamIdentifier = streamIdentifier;
        this.mMCCprotocol = mMCCprotocol;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPMMCC
     * @description
     * 
     * This takes an `object` and converts it to a `IPMMCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMMCC`.
     * @returns {IPMMCC}
     */
    public static _from_object (_o: { [_K in keyof (IPMMCC)]: (IPMMCC)[_K] }): IPMMCC {
        return new IPMMCC(_o.iPMMCCObjId, _o.mMCCContents, _o.frameType, _o.streamIdentifier, _o.mMCCprotocol, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `frameType`
         * @public
         * @static
         */

    public static _enum_for_frameType = _enum_for_FrameType;        /**
         * @summary The enum used as the type of the component `mMCCprotocol`
         * @public
         * @static
         */

    public static _enum_for_mMCCprotocol = _enum_for_MMCCprotocol;
}

/**
 * @summary The Leading Root Component Types of IPMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPMMCC: $.ComponentSpec[] = [
    new $.ComponentSpec("iPMMCCObjId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mMCCContents", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPMMCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPMMCC: $.ComponentSpec[] = [
    new $.ComponentSpec("frameType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("streamIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("mMCCprotocol", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_IPMMCC: $.ASN1Decoder<IPMMCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPMMCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPMMCC (el: _Element): IPMMCC {
    if (!_cached_decoder_for_IPMMCC) { _cached_decoder_for_IPMMCC = function (el: _Element): IPMMCC {
    let iPMMCCObjId!: RELATIVE_OID;
    let mMCCContents!: OCTET_STRING;
    let frameType: OPTIONAL<FrameType>;
    let streamIdentifier: OPTIONAL<OCTET_STRING>;
    let mMCCprotocol: OPTIONAL<MMCCprotocol>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPMMCCObjId": (_el: _Element): void => { iPMMCCObjId = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "mMCCContents": (_el: _Element): void => { mMCCContents = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "frameType": (_el: _Element): void => { frameType = $._decode_implicit<FrameType>(() => _decode_FrameType)(_el); },
        "streamIdentifier": (_el: _Element): void => { streamIdentifier = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMCCprotocol": (_el: _Element): void => { mMCCprotocol = $._decode_implicit<MMCCprotocol>(() => _decode_MMCCprotocol)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPMMCC,
        _extension_additions_list_spec_for_IPMMCC,
        _root_component_type_list_2_spec_for_IPMMCC,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPMMCC(
        iPMMCCObjId,
        mMCCContents,
        frameType,
        streamIdentifier,
        mMCCprotocol,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPMMCC(el);
}

let _cached_encoder_for_IPMMCC: $.ASN1Encoder<IPMMCC> | null = null;

/**
 * @summary Encodes a(n) IPMMCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMMCC, encoded as an ASN.1 Element.
 */
export
function _encode_IPMMCC (value: IPMMCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPMMCC) { _cached_encoder_for_IPMMCC = function (value: IPMMCC, elGetter: $.ASN1Encoder<IPMMCC>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.iPMMCCObjId, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mMCCContents, $.BER);
    if (value.frameType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_FrameType, $.BER)(value.frameType, $.BER);
    }
    if (value.streamIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.streamIdentifier, $.BER);
    }
    if (value.mMCCprotocol !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMCCprotocol, $.BER)(value.mMCCprotocol, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPMMCC(value, elGetter);
}


/* eslint-enable */
