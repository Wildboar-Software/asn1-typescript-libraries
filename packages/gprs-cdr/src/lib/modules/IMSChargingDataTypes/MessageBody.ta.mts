/* eslint-disable */
import {
    GraphicString,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvolvedParty, _decode_InvolvedParty, _encode_InvolvedParty } from "../IMSChargingDataTypes/InvolvedParty.ta.mjs";


/**
 * @summary MessageBody
 * @description
 *
 * One body conveyed end to end in SIP (clause 6.3.1.2). Several bodies may
 * be present. A body with Content-Type application/sdp and
 * Content-Disposition session is session SDP and is recorded in the SDP
 * media components instead.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This grouped field comprising several sub-fields describing the data that
 * may be conveyed end-to-end in the body of a SIP MESSAGE. Since several
 * message bodies may be exchanged via SIP-signalling, this grouped field may
 * occur several times. The List of Message Bodies contains the following
 * elements: Content Type; Content Disposition; Content Length; Originator.
 * They are described in the appropriate subclause. Message bodies with the
 * "Content-Type" field set to application/sdp and the "Content-Disposition"
 * field set to session are not included in the "Message Bodies" field.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.27.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageBody ::= SEQUENCE {
 *    content-Type          [0] IMPLICIT GraphicString,
 *    content-Disposition   [1] IMPLICIT GraphicString OPTIONAL,
 *    content-Length        [2] IMPLICIT INTEGER,
 *    originator            [3] InvolvedParty OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MessageBody {
    /**
     * @summary `content_Type`.
     * @description
     *
     * MIME type of the body, for example application/zip, image/gif, or
     * audio/mpeg (clause 6.1.3.3). Bodies with Content-Type application/sdp
     * and Content-Disposition session are SDP and are not repeated here. 3GPP
     * TS 32.260 V20.1.0.
     *
     * @public
     * @readonly
     */
    readonly content_Type: GraphicString;
    /**
     * @summary `content_Disposition`.
     * @description
     *
     * Content-Disposition of the body. The value render means the body should
     * be displayed or otherwise rendered to the user. Other values include
     * session, inline, icon, alert, and attachment (clause 6.1.3.9).
     *
     * @public
     * @readonly
     */
    readonly content_Disposition: OPTIONAL<GraphicString>;
    /**
     * @summary `content_Length`.
     * @description
     *
     * Size of the message body in bytes (clause 6.1.3.3).
     *
     * @public
     * @readonly
     */
    readonly content_Length: INTEGER;
    /**
     * @summary `originator`.
     * @description
     *
     * This sub-field of the "List of Message Bodies" indicates the originating
     * party of the message body.
     *
     * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.35.
     *
     * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly originator: OPTIONAL<InvolvedParty>;

    constructor (
        content_Type: GraphicString,
        content_Disposition: OPTIONAL<GraphicString>,
        content_Length: INTEGER,
        originator: OPTIONAL<InvolvedParty>
    ) {
        this.content_Type = content_Type;
        this.content_Disposition = content_Disposition;
        this.content_Length = content_Length;
        this.originator = originator;
    }

    /**
     * @summary Restructures an object into a MessageBody
     * @description
     * 
     * This takes an `object` and converts it to a `MessageBody`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageBody`.
     * @returns {MessageBody}
     */
    public static _from_object (_o: { [_K in keyof (MessageBody)]: (MessageBody)[_K] }): MessageBody {
        return new MessageBody(_o.content_Type, _o.content_Disposition, _o.content_Length, _o.originator);
    }


}

/**
 * @summary The Leading Root Component Types of MessageBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessageBody: $.ComponentSpec[] = [
    new $.ComponentSpec("content-Type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("content-Disposition", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("content-Length", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originator", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MessageBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessageBody: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessageBody
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessageBody: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessageBody: $.ASN1Decoder<MessageBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessageBody (el: _Element): MessageBody {
    if (!_cached_decoder_for_MessageBody) { _cached_decoder_for_MessageBody = function (el: _Element): MessageBody {
    let content_Type!: GraphicString;
    let content_Disposition: OPTIONAL<GraphicString>;
    let content_Length!: INTEGER;
    let originator: OPTIONAL<InvolvedParty>;
    const callbacks: $.DecodingMap = {
        "content-Type": (_el: _Element): void => { content_Type = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "content-Disposition": (_el: _Element): void => { content_Disposition = $._decode_implicit<GraphicString>(() => $._decodeGraphicString)(_el); },
        "content-Length": (_el: _Element): void => { content_Length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "originator": (_el: _Element): void => { originator = $._decode_explicit<InvolvedParty>(() => _decode_InvolvedParty)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessageBody,
        _extension_additions_list_spec_for_MessageBody,
        _root_component_type_list_2_spec_for_MessageBody,
        undefined,
    );
    return new MessageBody(
        content_Type,
        content_Disposition,
        content_Length,
        originator
    );
}; }
    return _cached_decoder_for_MessageBody(el);
}

let _cached_encoder_for_MessageBody: $.ASN1Encoder<MessageBody> | null = null;

/**
 * @summary Encodes a(n) MessageBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageBody, encoded as an ASN.1 Element.
 */
export
function _encode_MessageBody (value: MessageBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessageBody) { _cached_encoder_for_MessageBody = function (value: MessageBody, _elGetter: $.ASN1Encoder<MessageBody>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER)(value.content_Type, $.BER));
    if (value.content_Disposition !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER)(value.content_Disposition, $.BER));
    }
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.content_Length, $.BER));
    if (value.originator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_InvolvedParty, $.BER)(value.originator, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessageBody(value, elGetter);
}


/* eslint-enable */
