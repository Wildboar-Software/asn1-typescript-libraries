/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";
// export { QFI, _decode_QFI, _encode_QFI } from "../TS33128Payloads/QFI.ta.mjs";
import { QOSRules, _decode_QOSRules, _encode_QOSRules } from "../TS33128Payloads/QOSRules.ta.mjs";
// export { QOSRules, _decode_QOSRules, _encode_QOSRules } from "../TS33128Payloads/QOSRules.ta.mjs";
import { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
// export { EPSBearerID, _decode_EPSBearerID, _encode_EPSBearerID } from "../TS33128Payloads/EPSBearerID.ta.mjs";
import { QOSFlowDescription, _decode_QOSFlowDescription, _encode_QOSFlowDescription } from "../TS33128Payloads/QOSFlowDescription.ta.mjs";
// export { QOSFlowDescription, _decode_QOSFlowDescription, _encode_QOSFlowDescription } from "../TS33128Payloads/QOSFlowDescription.ta.mjs";
import { QOSFlowProfile, _decode_QOSFlowProfile, _encode_QOSFlowProfile } from "../TS33128Payloads/QOSFlowProfile.ta.mjs";
// export { QOSFlowProfile, _decode_QOSFlowProfile, _encode_QOSFlowProfile } from "../TS33128Payloads/QOSFlowProfile.ta.mjs";
import { AccessType, _decode_AccessType, _encode_AccessType, _enum_for_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_threeGPPandNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPandNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../TS33128Payloads/AccessType.ta.mjs";


/**
 * @summary QOSFlowList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowList ::= SEQUENCE
 * {
 *     qFI                      [1] QFI,
 *     qOSRules                 [2] QOSRules OPTIONAL,
 *     eBI                      [3] EPSBearerID OPTIONAL,
 *     qOSFlowDescription       [4] QOSFlowDescription OPTIONAL,
 *     qOSFlowProfile           [5] QOSFlowProfile OPTIONAL,
 *     associatedANType         [6] AccessType OPTIONAL,
 *     defaultQOSRuleIndication [7] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class QOSFlowList {
    /**
     * @summary `qFI`.
     * @public
     * @readonly
     */
    readonly qFI: QFI;
    /**
     * @summary `qOSRules`.
     * @public
     * @readonly
     */
    readonly qOSRules: OPTIONAL<QOSRules>;
    /**
     * @summary `eBI`.
     * @public
     * @readonly
     */
    readonly eBI: OPTIONAL<EPSBearerID>;
    /**
     * @summary `qOSFlowDescription`.
     * @public
     * @readonly
     */
    readonly qOSFlowDescription: OPTIONAL<QOSFlowDescription>;
    /**
     * @summary `qOSFlowProfile`.
     * @public
     * @readonly
     */
    readonly qOSFlowProfile: OPTIONAL<QOSFlowProfile>;
    /**
     * @summary `associatedANType`.
     * @public
     * @readonly
     */
    readonly associatedANType: OPTIONAL<AccessType>;
    /**
     * @summary `defaultQOSRuleIndication`.
     * @public
     * @readonly
     */
    readonly defaultQOSRuleIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        qFI: QFI,
        qOSRules: OPTIONAL<QOSRules>,
        eBI: OPTIONAL<EPSBearerID>,
        qOSFlowDescription: OPTIONAL<QOSFlowDescription>,
        qOSFlowProfile: OPTIONAL<QOSFlowProfile>,
        associatedANType: OPTIONAL<AccessType>,
        defaultQOSRuleIndication: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.qFI = qFI;
        this.qOSRules = qOSRules;
        this.eBI = eBI;
        this.qOSFlowDescription = qOSFlowDescription;
        this.qOSFlowProfile = qOSFlowProfile;
        this.associatedANType = associatedANType;
        this.defaultQOSRuleIndication = defaultQOSRuleIndication;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a QOSFlowList
     * @description
     * 
     * This takes an `object` and converts it to a `QOSFlowList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `QOSFlowList`.
     * @returns {QOSFlowList}
     */
    public static _from_object (_o: { [_K in keyof (QOSFlowList)]: (QOSFlowList)[_K] }): QOSFlowList {
        return new QOSFlowList(_o.qFI, _o.qOSRules, _o.eBI, _o.qOSFlowDescription, _o.qOSFlowProfile, _o.associatedANType, _o.defaultQOSRuleIndication, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `associatedANType`
         * @public
         * @static
         */

    public static _enum_for_associatedANType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of QOSFlowList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_QOSFlowList: $.ComponentSpec[] = [
    new $.ComponentSpec("qFI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("qOSRules", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eBI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("qOSFlowDescription", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("qOSFlowProfile", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("associatedANType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("defaultQOSRuleIndication", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of QOSFlowList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_QOSFlowList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of QOSFlowList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_QOSFlowList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_QOSFlowList: $.ASN1Decoder<QOSFlowList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowList (el: _Element): QOSFlowList {
    if (!_cached_decoder_for_QOSFlowList) { _cached_decoder_for_QOSFlowList = function (el: _Element): QOSFlowList {
    let qFI!: QFI;
    let qOSRules: OPTIONAL<QOSRules>;
    let eBI: OPTIONAL<EPSBearerID>;
    let qOSFlowDescription: OPTIONAL<QOSFlowDescription>;
    let qOSFlowProfile: OPTIONAL<QOSFlowProfile>;
    let associatedANType: OPTIONAL<AccessType>;
    let defaultQOSRuleIndication: OPTIONAL<BOOLEAN>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "qFI": (_el: _Element): void => { qFI = $._decode_implicit<QFI>(() => _decode_QFI)(_el); },
        "qOSRules": (_el: _Element): void => { qOSRules = $._decode_implicit<QOSRules>(() => _decode_QOSRules)(_el); },
        "eBI": (_el: _Element): void => { eBI = $._decode_implicit<EPSBearerID>(() => _decode_EPSBearerID)(_el); },
        "qOSFlowDescription": (_el: _Element): void => { qOSFlowDescription = $._decode_implicit<QOSFlowDescription>(() => _decode_QOSFlowDescription)(_el); },
        "qOSFlowProfile": (_el: _Element): void => { qOSFlowProfile = $._decode_implicit<QOSFlowProfile>(() => _decode_QOSFlowProfile)(_el); },
        "associatedANType": (_el: _Element): void => { associatedANType = $._decode_implicit<AccessType>(() => _decode_AccessType)(_el); },
        "defaultQOSRuleIndication": (_el: _Element): void => { defaultQOSRuleIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QOSFlowList,
        _extension_additions_list_spec_for_QOSFlowList,
        _root_component_type_list_2_spec_for_QOSFlowList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new QOSFlowList(
        qFI,
        qOSRules,
        eBI,
        qOSFlowDescription,
        qOSFlowProfile,
        associatedANType,
        defaultQOSRuleIndication,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_QOSFlowList(el);
}

let _cached_encoder_for_QOSFlowList: $.ASN1Encoder<QOSFlowList> | null = null;

/**
 * @summary Encodes a(n) QOSFlowList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowList, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowList (value: QOSFlowList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowList) { _cached_encoder_for_QOSFlowList = function (value: QOSFlowList, elGetter: $.ASN1Encoder<QOSFlowList>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_QFI, $.BER)(value.qFI, $.BER);
    if (value.qOSRules !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_QOSRules, $.BER)(value.qOSRules, $.BER);
    }
    if (value.eBI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_EPSBearerID, $.BER)(value.eBI, $.BER);
    }
    if (value.qOSFlowDescription !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_QOSFlowDescription, $.BER)(value.qOSFlowDescription, $.BER);
    }
    if (value.qOSFlowProfile !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_QOSFlowProfile, $.BER)(value.qOSFlowProfile, $.BER);
    }
    if (value.associatedANType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_AccessType, $.BER)(value.associatedANType, $.BER);
    }
    if (value.defaultQOSRuleIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeBoolean, $.BER)(value.defaultQOSRuleIndication, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_QOSFlowList(value, elGetter);
}


/* eslint-enable */
