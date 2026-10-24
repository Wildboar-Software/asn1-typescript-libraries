/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActionIndicator, _decode_ActionIndicator, _encode_ActionIndicator, _enum_for_ActionIndicator } from "../IN-SSF-SCF-datatypes/ActionIndicator.ta.mjs";
// export { ActionIndicator, _enum_for_ActionIndicator, ActionIndicator_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionIndicator_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActionIndicator_retrieve /* IMPORTED_LONG_ENUMERATION_ITEM */, retrieve /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActionIndicator, _encode_ActionIndicator } from "../IN-SSF-SCF-datatypes/ActionIndicator.ta.mjs";
import { type ManageTriggerDataArg_triggerDataIdentifier, _decode_ManageTriggerDataArg_triggerDataIdentifier, _encode_ManageTriggerDataArg_triggerDataIdentifier } from "../IN-SSF-SCF-ops-args/ManageTriggerDataArg-triggerDataIdentifier.ta.mjs";
// export { ManageTriggerDataArg_triggerDataIdentifier, _decode_ManageTriggerDataArg_triggerDataIdentifier, _encode_ManageTriggerDataArg_triggerDataIdentifier } from "../IN-SSF-SCF-ops-args/ManageTriggerDataArg-triggerDataIdentifier.ta.mjs";
import { type RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
// export { RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
// export { TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";


/**
 * @summary ManageTriggerDataArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataArg ::= SEQUENCE {
 *   actionIndicator        [0]  ActionIndicator,
 *   triggerDataIdentifier
 *     CHOICE {profileAndDP  [1]  TriggerDataIdentifier,
 *             -- one trigger
 *             profile       [5]  ProfileIdentifier},
 *   registratorIdentifier  [2]  RegistratorIdentifier OPTIONAL,
 *   extensions             [3]  Extensions OPTIONAL,
 *   tDPIdentifier          [4]  TDPIdentifier OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ManageTriggerDataArg {
    /**
     * @summary `actionIndicator`.
     * @public
     * @readonly
     */
    readonly actionIndicator: ActionIndicator;
    /**
     * @summary `triggerDataIdentifier`.
     * @public
     * @readonly
     */
    readonly triggerDataIdentifier: ManageTriggerDataArg_triggerDataIdentifier;
    /**
     * @summary `registratorIdentifier`.
     * @public
     * @readonly
     */
    readonly registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `tDPIdentifier`.
     * @public
     * @readonly
     */
    readonly tDPIdentifier: OPTIONAL<TDPIdentifier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        actionIndicator: ActionIndicator,
        triggerDataIdentifier: ManageTriggerDataArg_triggerDataIdentifier,
        registratorIdentifier?: OPTIONAL<RegistratorIdentifier>,
        extensions?: OPTIONAL<Extensions>,
        tDPIdentifier?: OPTIONAL<TDPIdentifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.actionIndicator = actionIndicator;
        this.triggerDataIdentifier = triggerDataIdentifier;
        this.registratorIdentifier = registratorIdentifier;
        this.extensions = extensions;
        this.tDPIdentifier = tDPIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ManageTriggerDataArg
     * @description
     * 
     * This takes an `object` and converts it to a `ManageTriggerDataArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ManageTriggerDataArg`.
     * @returns {ManageTriggerDataArg}
     */
    public static _from_object (_o: { [_K in keyof (ManageTriggerDataArg)]: (ManageTriggerDataArg)[_K] }): ManageTriggerDataArg {
        return new ManageTriggerDataArg(_o.actionIndicator, _o.triggerDataIdentifier, _o.registratorIdentifier, _o.extensions, _o.tDPIdentifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `actionIndicator`
         * @public
         * @static
         */

    public static _enum_for_actionIndicator = _enum_for_ActionIndicator;
}

/**
 * @summary The Leading Root Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    new $.ComponentSpec("actionIndicator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("triggerDataIdentifier", false, $.hasAnyTag),
    new $.ComponentSpec("registratorIdentifier", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tDPIdentifier", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ManageTriggerDataArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ManageTriggerDataArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ManageTriggerDataArg: $.ASN1Decoder<ManageTriggerDataArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataArg (el: _Element): ManageTriggerDataArg {
    if (!_cached_decoder_for_ManageTriggerDataArg) { _cached_decoder_for_ManageTriggerDataArg = function (el: _Element): ManageTriggerDataArg {
    let actionIndicator!: ActionIndicator;
    let triggerDataIdentifier!: ManageTriggerDataArg_triggerDataIdentifier;
    let registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    let extensions: OPTIONAL<Extensions>;
    let tDPIdentifier: OPTIONAL<TDPIdentifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "actionIndicator": (_el: _Element): void => { actionIndicator = $._decode_implicit<ActionIndicator>(() => _decode_ActionIndicator)(_el); },
        "triggerDataIdentifier": (_el: _Element): void => { triggerDataIdentifier = _decode_ManageTriggerDataArg_triggerDataIdentifier(_el); },
        "registratorIdentifier": (_el: _Element): void => { registratorIdentifier = $._decode_implicit<RegistratorIdentifier>(() => _decode_RegistratorIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "tDPIdentifier": (_el: _Element): void => { tDPIdentifier = $._decode_explicit<TDPIdentifier>(() => _decode_TDPIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ManageTriggerDataArg,
        _extension_additions_list_spec_for_ManageTriggerDataArg,
        _root_component_type_list_2_spec_for_ManageTriggerDataArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ManageTriggerDataArg(
        actionIndicator,
        triggerDataIdentifier,
        registratorIdentifier,
        extensions,
        tDPIdentifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ManageTriggerDataArg(el);
}

let _cached_encoder_for_ManageTriggerDataArg: $.ASN1Encoder<ManageTriggerDataArg> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataArg, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataArg (value: ManageTriggerDataArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataArg) { _cached_encoder_for_ManageTriggerDataArg = function (value: ManageTriggerDataArg, elGetter: $.ASN1Encoder<ManageTriggerDataArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ActionIndicator, $.BER)(value.actionIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ _encode_ManageTriggerDataArg_triggerDataIdentifier(value.triggerDataIdentifier, $.BER);
    if (value.registratorIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RegistratorIdentifier, $.BER)(value.registratorIdentifier, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.tDPIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_TDPIdentifier, $.BER)(value.tDPIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ManageTriggerDataArg(value, elGetter);
}


/* eslint-enable */
