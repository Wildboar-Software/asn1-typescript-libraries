/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    RELATIVE_OID,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessagingCC
 * @description
 *
 * HI3 captured content for one unified-messaging event, or for one chunk of
 * that content.
 *
 * Use this payload unless the signalling of ETSI TS 102 232-5 is required; in
 * that case use `MessagingMMCC`. Events that shall trigger content are listed
 * in table 5.
 *
 * A CIN covers one logical sequence, for example from login to logout, and
 * intermediate events share it. `event_identifier` picks out one event inside
 * that CIN when several IRI and content records are sent (a target may retrieve
 * three messages in one session). `content_identifier` picks out one stream
 * inside that event, such as text and graphics, or one RTP leg.
 *
 * Streamed content may be split so it does not have to be buffered.
 * `sequence_number` starts at 0 and the last chunk sets `end_of_sequence`.
 * Without sequence numbering, `content` holds the whole object.
 *
 * An SMS deposited by the UM system is `text/plain`, with an optional character
 * encoding. An iCalendar object uses the MIME type in IETF RFC 5545 and the
 * formatting in IETF RFC 4791. A contact uses the MIME type in IETF RFC 6350
 * and the vCard formatting in IETF RFC 6352.
 *
 * RTP legs between the user and the UM system start when the user connects, and
 * are correlated to the HI2 `connect` event. Table 6: `event_identifier` is
 * that of the connect IRI, `content_identifier` distinguishes the legs,
 * `content_type` is the MIME type translated from the RTP payload type, and
 * `content` is the extracted RTP payload. Direction is signalled on the part-1
 * `CCPayload.payloadDirection` as from-target or to-target.
 *
 * One UM event can produce several IRI and content deliveries, for example an
 * SMS notification and an email notification together. If both the mobile and
 * the mailbox are intercepted, access to the target's own box can duplicate
 * delivery; by agreement, content from the UM system may be omitted in that
 * case.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessagingCC ::= SEQUENCE
 *     -- MessagingCC is the PDU sent for the captured content
 * {
 *     messaging-cc-obj-id     [0] RELATIVE-OID,
 *     event-identifier            [1] INTEGER (0..4294967295),
 *         -- Used to correlate to MessagingIRI within the same CIN
 *     content-identifier          [2] INTEGER (0..4294967295) OPTIONAL,
 *     sequence-number             [3] INTEGER (0..4294967295) OPTIONAL,
 *     end-of-sequence             [4] BOOLEAN DEFAULT FALSE,
 *     content-type                [5] OCTET STRING,
 *         -- MIME content type, i.e.: image/png, text/plain;charset=utf8, audio/PCMA
 *     content                     [6] OCTET STRING,
 *     ...,
 *     content-transfer-encoding   [7] OCTET STRING OPTIONAL
 *         -- MIME Content-Transfer-Encoding mechanism.
 *         -- Refer to IETF RFC 2045 [20]
 * }
 * ```
 * 
 * @class
 */
export
class MessagingCC {
    /**
     * @summary `messaging_cc_obj_id`.
     * @description
     *
     * Set to `messagingCCObjId`, `{emailPDUObjId messagingCC(4)}`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1 and annex D.
     *
     * @public
     * @readonly
     */
    readonly messaging_cc_obj_id: RELATIVE_OID;
    /**
     * @summary `event_identifier`.
     * @description
     *
     * Correlates this content with the `MessagingIRI` that carries the same
     * identifier, inside one CIN. The IRI field is mandatory when content is
     * also sent. For RTP, use the identifier of the `connect` event (table 6).
     * Range 0 to 4294967295.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly event_identifier: INTEGER;
    /**
     * @summary `content_identifier`.
     * @description
     *
     * Distinguishes content streams that share one `event_identifier`, for
     * example text and graphics, or separate RTP legs. Range 0 to 4294967295.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly content_identifier: OPTIONAL<INTEGER>;
    /**
     * @summary `sequence_number`.
     * @description
     *
     * Chunk index when content is streamed and buffering is undesirable.
     * Numbering starts at 0. Absent when the `content` field holds the entire
     * object. Range 0 to 4294967295.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly sequence_number: OPTIONAL<INTEGER>;
    /**
     * @summary `end_of_sequence`.
     * @description
     *
     * True on the last chunk when `sequence_number` is used. Default is false.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly end_of_sequence: OPTIONAL<BOOLEAN>;
    /**
     * @summary `content_type`.
     * @description
     *
     * MIME type of `content`, as in IETF RFC 2045 and IETF RFC 2046. The
     * module's examples are `image/png`, `text/plain;charset=utf8`, and
     * `audio/PCMA`. SMS from the UM system uses `text/plain`. For RTP, this is
     * the MIME type translated from the RTP payload type.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly content_type: OCTET_STRING;
    /**
     * @summary `content`.
     * @description
     *
     * The captured object, or one chunk of it when `sequence_number` is
     * present. For RTP, the extracted RTP payload according to the MIME type.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly content: OCTET_STRING;
    /**
     * @summary `content_transfer_encoding`.
     * @description
     *
     * MIME Content-Transfer-Encoding applied to `content`, using a token from
     * IETF RFC 2045, such as `7bit`, `8bit`, `binary`, `quoted-printable`, or
     * `base64`.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.1.
     *
     * @public
     * @readonly
     */
    readonly content_transfer_encoding: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messaging_cc_obj_id: RELATIVE_OID,
        event_identifier: INTEGER,
        content_identifier: OPTIONAL<INTEGER>,
        sequence_number: OPTIONAL<INTEGER>,
        end_of_sequence: OPTIONAL<BOOLEAN>,
        content_type: OCTET_STRING,
        content: OCTET_STRING,
        content_transfer_encoding: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messaging_cc_obj_id = messaging_cc_obj_id;
        this.event_identifier = event_identifier;
        this.content_identifier = content_identifier;
        this.sequence_number = sequence_number;
        this.end_of_sequence = end_of_sequence;
        this.content_type = content_type;
        this.content = content;
        this.content_transfer_encoding = content_transfer_encoding;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MessagingCC
     * @description
     * 
     * This takes an `object` and converts it to a `MessagingCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessagingCC`.
     * @returns {MessagingCC}
     */
    public static _from_object (_o: { [_K in keyof (MessagingCC)]: (MessagingCC)[_K] }): MessagingCC {
        return new MessagingCC(_o.messaging_cc_obj_id, _o.event_identifier, _o.content_identifier, _o.sequence_number, _o.end_of_sequence, _o.content_type, _o.content, _o.content_transfer_encoding, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `end_of_sequence`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_end_of_sequence () { return false; }
}

/**
 * @summary The Leading Root Component Types of MessagingCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessagingCC: $.ComponentSpec[] = [
    new $.ComponentSpec("messaging-cc-obj-id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("event-identifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("content-identifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sequence-number", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("end-of-sequence", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("content-type", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of MessagingCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessagingCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessagingCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessagingCC: $.ComponentSpec[] = [
    new $.ComponentSpec("content-transfer-encoding", true, $.hasTag(_TagClass.context, 7))
];

let _cached_decoder_for_MessagingCC: $.ASN1Decoder<MessagingCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessagingCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessagingCC (el: _Element): MessagingCC {
    if (!_cached_decoder_for_MessagingCC) { _cached_decoder_for_MessagingCC = function (el: _Element): MessagingCC {
    let messaging_cc_obj_id!: RELATIVE_OID;
    let event_identifier!: INTEGER;
    let content_identifier: OPTIONAL<INTEGER>;
    let sequence_number: OPTIONAL<INTEGER>;
    let end_of_sequence: OPTIONAL<BOOLEAN> = MessagingCC._default_value_for_end_of_sequence;
    let content_type!: OCTET_STRING;
    let content!: OCTET_STRING;
    let content_transfer_encoding: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "messaging-cc-obj-id": (_el: _Element): void => { messaging_cc_obj_id = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "event-identifier": (_el: _Element): void => {
            event_identifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof event_identifier === "bigint" ? event_identifier : BigInt(event_identifier);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingCC.event_identifier violates INTEGER range");
            }
        },
        "content-identifier": (_el: _Element): void => {
            content_identifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof content_identifier === "bigint" ? content_identifier : BigInt(content_identifier);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingCC.content_identifier violates INTEGER range");
            }
        },
        "sequence-number": (_el: _Element): void => {
            sequence_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof sequence_number === "bigint" ? sequence_number : BigInt(sequence_number);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingCC.sequence_number violates INTEGER range");
            }
        },
        "end-of-sequence": (_el: _Element): void => { end_of_sequence = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "content-type": (_el: _Element): void => { content_type = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "content-transfer-encoding": (_el: _Element): void => { content_transfer_encoding = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessagingCC,
        _extension_additions_list_spec_for_MessagingCC,
        _root_component_type_list_2_spec_for_MessagingCC,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MessagingCC(
        messaging_cc_obj_id,
        event_identifier,
        content_identifier,
        sequence_number,
        end_of_sequence,
        content_type,
        content,
        content_transfer_encoding,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MessagingCC(el);
}

let _cached_encoder_for_MessagingCC: $.ASN1Encoder<MessagingCC> | null = null;

/**
 * @summary Encodes a(n) MessagingCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessagingCC, encoded as an ASN.1 Element.
 */
export
function _encode_MessagingCC (value: MessagingCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessagingCC) { _cached_encoder_for_MessagingCC = function (value: MessagingCC, elGetter: $.ASN1Encoder<MessagingCC>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.messaging_cc_obj_id, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.event_identifier, $.BER);
    if (value.content_identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.content_identifier, $.BER);
    }
    if (value.sequence_number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.sequence_number, $.BER);
    }
    if (value.end_of_sequence !== undefined && !$.deepEq(value.end_of_sequence, MessagingCC._default_value_for_end_of_sequence)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.end_of_sequence, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.content_type, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.content, $.BER);
    if (value.content_transfer_encoding !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.content_transfer_encoding, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessagingCC(value, elGetter);
}


/* eslint-enable */
