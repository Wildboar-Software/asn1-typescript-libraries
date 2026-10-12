/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    RELATIVE_OID,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as IPMultimediaPDU from "../IPMultimediaPDU/index.mjs";
// export { IPMMCC, _decode_IPMMCC, _encode_IPMMCC } from "../IPMultimediaPDU/IPMMCC.ta.mjs";


/**
 * @summary MessagingMMCC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessagingMMCC ::= SEQUENCE
 *     -- MessagingMMCC is the PDU sent for the captured IPMultimediaPDU.IPMMCC content
 * {
 *     messaging-mm-cc-obj-id      [0] RELATIVE-OID,
 *     event-identifier            [1] INTEGER (0..4294967295),
 *         -- Used to correlate to MessagingIRI within the same CIN
 *     content-identifier          [2] INTEGER (0..4294967295) OPTIONAL,
 *     content                     [3] IPMultimediaPDU.IPMMCC,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MessagingMMCC {
    /**
     * @summary `messaging_mm_cc_obj_id`.
     * @public
     * @readonly
     */
    readonly messaging_mm_cc_obj_id: RELATIVE_OID;
    /**
     * @summary `event_identifier`.
     * @public
     * @readonly
     */
    readonly event_identifier: INTEGER;
    /**
     * @summary `content_identifier`.
     * @public
     * @readonly
     */
    readonly content_identifier: OPTIONAL<INTEGER>;
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: IPMultimediaPDU.IPMMCC;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        messaging_mm_cc_obj_id: RELATIVE_OID,
        event_identifier: INTEGER,
        content_identifier: OPTIONAL<INTEGER>,
        content: IPMultimediaPDU.IPMMCC,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.messaging_mm_cc_obj_id = messaging_mm_cc_obj_id;
        this.event_identifier = event_identifier;
        this.content_identifier = content_identifier;
        this.content = content;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MessagingMMCC
     * @description
     * 
     * This takes an `object` and converts it to a `MessagingMMCC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessagingMMCC`.
     * @returns {MessagingMMCC}
     */
    public static _from_object (_o: { [_K in keyof (MessagingMMCC)]: (MessagingMMCC)[_K] }): MessagingMMCC {
        return new MessagingMMCC(_o.messaging_mm_cc_obj_id, _o.event_identifier, _o.content_identifier, _o.content, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MessagingMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MessagingMMCC: $.ComponentSpec[] = [
    new $.ComponentSpec("messaging-mm-cc-obj-id", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("event-identifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("content-identifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of MessagingMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MessagingMMCC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MessagingMMCC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MessagingMMCC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MessagingMMCC: $.ASN1Decoder<MessagingMMCC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessagingMMCC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MessagingMMCC (el: _Element): MessagingMMCC {
    if (!_cached_decoder_for_MessagingMMCC) { _cached_decoder_for_MessagingMMCC = function (el: _Element): MessagingMMCC {
    let messaging_mm_cc_obj_id!: RELATIVE_OID;
    let event_identifier!: INTEGER;
    let content_identifier: OPTIONAL<INTEGER>;
    let content!: IPMultimediaPDU.IPMMCC;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "messaging-mm-cc-obj-id": (_el: _Element): void => { messaging_mm_cc_obj_id = $._decode_implicit<RELATIVE_OID>(() => $._decodeRelativeOID)(_el); },
        "event-identifier": (_el: _Element): void => {
            event_identifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof event_identifier === "bigint" ? event_identifier : BigInt(event_identifier);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingMMCC.event_identifier violates INTEGER range");
            }
        },
        "content-identifier": (_el: _Element): void => {
            content_identifier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof content_identifier === "bigint" ? content_identifier : BigInt(content_identifier);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("MessagingMMCC.content_identifier violates INTEGER range");
            }
        },
        "content": (_el: _Element): void => { content = $._decode_implicit<IPMultimediaPDU.IPMMCC>(() => IPMultimediaPDU._decode_IPMMCC)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MessagingMMCC,
        _extension_additions_list_spec_for_MessagingMMCC,
        _root_component_type_list_2_spec_for_MessagingMMCC,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MessagingMMCC(
        messaging_mm_cc_obj_id,
        event_identifier,
        content_identifier,
        content,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MessagingMMCC(el);
}

let _cached_encoder_for_MessagingMMCC: $.ASN1Encoder<MessagingMMCC> | null = null;

/**
 * @summary Encodes a(n) MessagingMMCC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessagingMMCC, encoded as an ASN.1 Element.
 */
export
function _encode_MessagingMMCC (value: MessagingMMCC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MessagingMMCC) { _cached_encoder_for_MessagingMMCC = function (value: MessagingMMCC, elGetter: $.ASN1Encoder<MessagingMMCC>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeRelativeOID, $.BER)(value.messaging_mm_cc_obj_id, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.event_identifier, $.BER);
    if (value.content_identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.content_identifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => IPMultimediaPDU._encode_IPMMCC, $.BER)(value.content, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MessagingMMCC(value, elGetter);
}


/* eslint-enable */
