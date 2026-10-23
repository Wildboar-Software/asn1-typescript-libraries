/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CalledPartyBusinessGroupID.ta.mjs";
// export { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CalledPartyBusinessGroupID.ta.mjs";
import { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS-1-Datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS-1-Datatypes/CalledPartySubaddress.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
import { FeatureRequestIndicator, _decode_FeatureRequestIndicator, _encode_FeatureRequestIndicator, _enum_for_FeatureRequestIndicator } from "../IN-CS-1-Datatypes/FeatureRequestIndicator.ta.mjs";
// export { FeatureRequestIndicator, _enum_for_FeatureRequestIndicator, FeatureRequestIndicator_hold /* IMPORTED_LONG_ENUMERATION_ITEM */, hold /* IMPORTED_SHORT_ENUMERATION_ITEM */, FeatureRequestIndicator_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, FeatureRequestIndicator_featureActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, featureActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, FeatureRequestIndicator_spare1 /* IMPORTED_LONG_ENUMERATION_ITEM */, spare1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, FeatureRequestIndicator_sparen /* IMPORTED_LONG_ENUMERATION_ITEM */, sparen /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FeatureRequestIndicator, _encode_FeatureRequestIndicator } from "../IN-CS-1-Datatypes/FeatureRequestIndicator.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";


/**
 * @summary MidCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID   [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress        [2]  CalledPartySubaddress OPTIONAL,
 *   callingPartyBusinessGroupID  [3]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartySubaddress       [4]  CallingPartySubaddress OPTIONAL,
 *   featureRequestIndicator      [5]  FeatureRequestIndicator OPTIONAL,
 *   extensions
 *     [6]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   carrier                      [7]  Carrier OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class MidCallArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `calledPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    /**
     * @summary `calledPartySubaddress`.
     * @public
     * @readonly
     */
    readonly calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `featureRequestIndicator`.
     * @public
     * @readonly
     */
    readonly featureRequestIndicator: OPTIONAL<FeatureRequestIndicator>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>,
        calledPartySubaddress: OPTIONAL<CalledPartySubaddress>,
        callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartySubaddress: OPTIONAL<CallingPartySubaddress>,
        featureRequestIndicator: OPTIONAL<FeatureRequestIndicator>,
        extensions: ExtensionField[],
        carrier?: OPTIONAL<Carrier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartySubaddress = callingPartySubaddress;
        this.featureRequestIndicator = featureRequestIndicator;
        this.extensions = extensions;
        this.carrier = carrier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MidCallArg
     * @description
     * 
     * This takes an `object` and converts it to a `MidCallArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MidCallArg`.
     * @returns {MidCallArg}
     */
    public static _from_object (_o: { [_K in keyof (MidCallArg)]: (MidCallArg)[_K] }): MidCallArg {
        return new MidCallArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.callingPartyBusinessGroupID, _o.callingPartySubaddress, _o.featureRequestIndicator, _o.extensions, _o.carrier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `featureRequestIndicator`
         * @public
         * @static
         */

    public static _enum_for_featureRequestIndicator = _enum_for_FeatureRequestIndicator;
}

/**
 * @summary The Leading Root Component Types of MidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MidCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("featureRequestIndicator", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of MidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MidCallArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MidCallArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MidCallArg: $.ASN1Decoder<MidCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallArg (el: _Element): MidCallArg {
    if (!_cached_decoder_for_MidCallArg) { _cached_decoder_for_MidCallArg = function (el: _Element): MidCallArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let featureRequestIndicator: OPTIONAL<FeatureRequestIndicator>;
    let extensions!: ExtensionField[];
    let carrier: OPTIONAL<Carrier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "featureRequestIndicator": (_el: _Element): void => { featureRequestIndicator = $._decode_implicit<FeatureRequestIndicator>(() => _decode_FeatureRequestIndicator)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MidCallArg,
        _extension_additions_list_spec_for_MidCallArg,
        _root_component_type_list_2_spec_for_MidCallArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MidCallArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        callingPartyBusinessGroupID,
        callingPartySubaddress,
        featureRequestIndicator,
        extensions,
        carrier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MidCallArg(el);
}

let _cached_encoder_for_MidCallArg: $.ASN1Encoder<MidCallArg> | null = null;

/**
 * @summary Encodes a(n) MidCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallArg (value: MidCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallArg) { _cached_encoder_for_MidCallArg = function (value: MidCallArg, elGetter: $.ASN1Encoder<MidCallArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.calledPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBusinessGroupID, $.BER)(value.calledPartyBusinessGroupID, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.featureRequestIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FeatureRequestIndicator, $.BER)(value.featureRequestIndicator, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MidCallArg(value, elGetter);
}


/* eslint-enable */
