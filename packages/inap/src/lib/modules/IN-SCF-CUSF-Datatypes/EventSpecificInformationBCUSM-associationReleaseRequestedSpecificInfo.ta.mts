/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCUSM-associationReleaseRequestedSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo {
    /**
     * @summary `associationReleaseInfo`.
     * @public
     * @readonly
     */
    readonly associationReleaseInfo: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        associationReleaseInfo: OPTIONAL<OCTET_STRING>,
        releaseCause: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.associationReleaseInfo = associationReleaseInfo;
        this.releaseCause = releaseCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo`.
     * @returns {EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo)]: (EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo)[_K] }): EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo {
        return new EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo(_o.associationReleaseInfo, _o.releaseCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("associationReleaseInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo (el: _Element): EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo) { _cached_decoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo = function (el: _Element): EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo {
    let associationReleaseInfo: OPTIONAL<OCTET_STRING>;
    let releaseCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "associationReleaseInfo": (_el: _Element): void => { associationReleaseInfo = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo(
        associationReleaseInfo,
        releaseCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo (value: EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo) { _cached_encoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo = function (value: EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.associationReleaseInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.associationReleaseInfo, $.BER);
    }
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo(value, elGetter);
}


/* eslint-enable */
