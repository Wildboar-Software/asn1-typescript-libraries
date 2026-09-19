/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
// export { IndAudPropertyParm, _decode_IndAudPropertyParm, _encode_IndAudPropertyParm } from "../MEDIA-GATEWAY-CONTROL/IndAudPropertyParm.ta.mjs";
import { SelectLogic, _decode_SelectLogic, _encode_SelectLogic } from "../MEDIA-GATEWAY-CONTROL/SelectLogic.ta.mjs";
// export { SelectLogic, _decode_SelectLogic, _encode_SelectLogic } from "../MEDIA-GATEWAY-CONTROL/SelectLogic.ta.mjs";


/**
 * @summary ContextAttrAuditRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextAttrAuditRequest ::= SEQUENCE
 *     {
 *         topology                [0] NULL OPTIONAL,
 *         emergency                [1] NULL OPTIONAL,
 *         priority                [2] NULL OPTIONAL,
 *         ...,
 *         iepscallind                [3] NULL OPTIONAL,
 *         contextPropAud            [4] SEQUENCE OF IndAudPropertyParm OPTIONAL,
 *         selectpriority            [5] INTEGER(0..15) OPTIONAL,
 *         -- to select given priority
 *         selectemergency            [6] BOOLEAN OPTIONAL,
 *         -- to select if emergency set/not set (T/F)
 *         selectiepscallind        [7] BOOLEAN OPTIONAL,
 *         -- to select if IEPS set/not set (T/F)
 *         selectLogic                [8] SelectLogic OPTIONAL -- default is AND
 *     }
 * ```
 * 
 * @class
 */
export
class ContextAttrAuditRequest {
    constructor (
        /**
         * @summary `topology`.
         * @public
         * @readonly
         */
        readonly topology: OPTIONAL<NULL>,
        /**
         * @summary `emergency`.
         * @public
         * @readonly
         */
        readonly emergency: OPTIONAL<NULL>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<NULL>,
        /**
         * @summary `iepscallind`.
         * @public
         * @readonly
         */
        readonly iepscallind: OPTIONAL<NULL>,
        /**
         * @summary `contextPropAud`.
         * @public
         * @readonly
         */
        readonly contextPropAud: OPTIONAL<IndAudPropertyParm[]>,
        /**
         * @summary `selectpriority`.
         * @public
         * @readonly
         */
        readonly selectpriority: OPTIONAL<INTEGER>,
        /**
         * @summary `selectemergency`.
         * @public
         * @readonly
         */
        readonly selectemergency: OPTIONAL<BOOLEAN>,
        /**
         * @summary `selectiepscallind`.
         * @public
         * @readonly
         */
        readonly selectiepscallind: OPTIONAL<BOOLEAN>,
        /**
         * @summary `selectLogic`.
         * @public
         * @readonly
         */
        readonly selectLogic: OPTIONAL<SelectLogic>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ContextAttrAuditRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ContextAttrAuditRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContextAttrAuditRequest`.
     * @returns {ContextAttrAuditRequest}
     */
    public static _from_object (_o: { [_K in keyof (ContextAttrAuditRequest)]: (ContextAttrAuditRequest)[_K] }): ContextAttrAuditRequest {
        return new ContextAttrAuditRequest(_o.topology, _o.emergency, _o.priority, _o.iepscallind, _o.contextPropAud, _o.selectpriority, _o.selectemergency, _o.selectiepscallind, _o.selectLogic, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ContextAttrAuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContextAttrAuditRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("topology", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("emergency", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ContextAttrAuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContextAttrAuditRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContextAttrAuditRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContextAttrAuditRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("iepscallind", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("contextPropAud", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("selectpriority", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("selectemergency", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("selectiepscallind", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("selectLogic", true, $.hasTag(_TagClass.context, 8))
];

let _cached_decoder_for_ContextAttrAuditRequest: $.ASN1Decoder<ContextAttrAuditRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextAttrAuditRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextAttrAuditRequest (el: _Element): ContextAttrAuditRequest {
    if (!_cached_decoder_for_ContextAttrAuditRequest) { _cached_decoder_for_ContextAttrAuditRequest = function (el: _Element): ContextAttrAuditRequest {
    let topology: OPTIONAL<NULL>;
    let emergency: OPTIONAL<NULL>;
    let priority: OPTIONAL<NULL>;
    let iepscallind: OPTIONAL<NULL>;
    let contextPropAud: OPTIONAL<IndAudPropertyParm[]>;
    let selectpriority: OPTIONAL<INTEGER>;
    let selectemergency: OPTIONAL<BOOLEAN>;
    let selectiepscallind: OPTIONAL<BOOLEAN>;
    let selectLogic: OPTIONAL<SelectLogic>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "topology": (_el: _Element): void => { topology = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "emergency": (_el: _Element): void => { emergency = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iepscallind": (_el: _Element): void => { iepscallind = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "contextPropAud": (_el: _Element): void => { contextPropAud = $._decode_implicit<IndAudPropertyParm[]>(() => $._decodeSequenceOf<IndAudPropertyParm>(() => _decode_IndAudPropertyParm))(_el); },
        "selectpriority": (_el: _Element): void => { selectpriority = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "selectemergency": (_el: _Element): void => { selectemergency = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "selectiepscallind": (_el: _Element): void => { selectiepscallind = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "selectLogic": (_el: _Element): void => { selectLogic = $._decode_explicit<SelectLogic>(() => _decode_SelectLogic)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContextAttrAuditRequest,
        _extension_additions_list_spec_for_ContextAttrAuditRequest,
        _root_component_type_list_2_spec_for_ContextAttrAuditRequest,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContextAttrAuditRequest(
        topology,
        emergency,
        priority,
        iepscallind,
        contextPropAud,
        selectpriority,
        selectemergency,
        selectiepscallind,
        selectLogic,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContextAttrAuditRequest(el);
}

let _cached_encoder_for_ContextAttrAuditRequest: $.ASN1Encoder<ContextAttrAuditRequest> | null = null;

/**
 * @summary Encodes a(n) ContextAttrAuditRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextAttrAuditRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ContextAttrAuditRequest (value: ContextAttrAuditRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextAttrAuditRequest) { _cached_encoder_for_ContextAttrAuditRequest = function (value: ContextAttrAuditRequest, elGetter: $.ASN1Encoder<ContextAttrAuditRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.topology === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.topology, $.BER)),
            /* IF_ABSENT  */ ((value.emergency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.emergency, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.priority, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.iepscallind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.iepscallind, $.BER)),
            /* IF_ABSENT  */ ((value.contextPropAud === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<IndAudPropertyParm>(() => _encode_IndAudPropertyParm, $.BER), $.BER)(value.contextPropAud, $.BER)),
            /* IF_ABSENT  */ ((value.selectpriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.selectpriority, $.BER)),
            /* IF_ABSENT  */ ((value.selectemergency === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.selectemergency, $.BER)),
            /* IF_ABSENT  */ ((value.selectiepscallind === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.selectiepscallind, $.BER)),
            /* IF_ABSENT  */ ((value.selectLogic === undefined) ? undefined : $._encode_explicit(_TagClass.context, 8, () => _encode_SelectLogic, $.BER)(value.selectLogic, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ContextAttrAuditRequest(value, elGetter);
}


/* eslint-enable */
