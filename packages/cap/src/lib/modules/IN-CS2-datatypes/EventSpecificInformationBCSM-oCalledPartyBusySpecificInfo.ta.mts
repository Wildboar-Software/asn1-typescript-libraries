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


/**
 * @summary EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCSM-oCalledPartyBusySpecificInfo ::= SEQUENCE {
 *     busyCause  [0]  Cause{bound} OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    constructor (
        /**
         * @summary `busyCause`.
         * @public
         * @readonly
         */
        readonly busyCause: OPTIONAL<Cause>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo`.
     * @returns {EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo)]: (EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo)[_K] }): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
        return new EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(_o.busyCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("busyCause", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo (el: _Element): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo) { _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo {
    let busyCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "busyCause": (_el: _Element): void => { busyCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(
        busyCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo (value: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo) { _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo = function (value: EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.busyCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.busyCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCSM_oCalledPartyBusySpecificInfo(value, elGetter);
}


/* eslint-enable */
