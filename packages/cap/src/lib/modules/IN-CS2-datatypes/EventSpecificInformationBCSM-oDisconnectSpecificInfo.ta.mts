/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oDisconnectSpecificInfo ::= SEQUENCE {
 *     releaseCause  [0]  Cause{bound} OPTIONAL,
 *     connectTime   [1]  Integer4 OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    constructor (
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>,
        /**
         * @summary `connectTime`.
         * @public
         * @readonly
         */
        readonly connectTime: OPTIONAL<Integer4>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oDisconnectSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oDisconnectSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oDisconnectSpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oDisconnectSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oDisconnectSpecificInfo)]: (EventSpecificInformationBCSM_oDisconnectSpecificInfo)[_K] }): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
        return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(_o.releaseCause, _o.connectTime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    let releaseCause: OPTIONAL<Cause>;
    let connectTime: OPTIONAL<Integer4>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(
        releaseCause,
        connectTime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oDisconnectSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oDisconnectSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER)),
            /* IF_ABSENT  */ ((value.connectTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.connectTime, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(value, elGetter);
}


/* eslint-enable */
