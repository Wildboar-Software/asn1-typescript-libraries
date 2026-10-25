/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TriggerStatus, _decode_TriggerStatus, _encode_TriggerStatus, _enum_for_TriggerStatus } from "../IN-CS3-SSF-SCF-datatypes/TriggerStatus.ta.mjs";
// export { TriggerStatus, _enum_for_TriggerStatus, TriggerStatus_created /* IMPORTED_LONG_ENUMERATION_ITEM */, created /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerStatus_alreadyExist /* IMPORTED_LONG_ENUMERATION_ITEM */, alreadyExist /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerStatus_deleted /* IMPORTED_LONG_ENUMERATION_ITEM */, deleted /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerStatus_unknownTrigger /* IMPORTED_LONG_ENUMERATION_ITEM */, unknownTrigger /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerStatus, _encode_TriggerStatus } from "../IN-CS3-SSF-SCF-datatypes/TriggerStatus.ta.mjs";
import { type TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-CS3-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
// export { TDPIdentifier, _decode_TDPIdentifier, _encode_TDPIdentifier } from "../IN-CS3-SSF-SCF-datatypes/TDPIdentifier.ta.mjs";
import { type RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-CS3-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
// export { RegistratorIdentifier, _decode_RegistratorIdentifier, _encode_RegistratorIdentifier } from "../IN-CS3-SSF-SCF-datatypes/RegistratorIdentifier.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";


/**
 * @summary CreateOrRemoveTriggerDataResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateOrRemoveTriggerDataResultArg ::= SEQUENCE {
 *   triggerStatus          [0]  TriggerStatus,
 *   tDPIdentifier          [1]  TDPIdentifier,
 *   registratorIdentifier  [2]  RegistratorIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions             [30]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CreateOrRemoveTriggerDataResultArg {
    /**
     * @summary `triggerStatus`.
     * @public
     * @readonly
     */
    readonly triggerStatus: TriggerStatus;
    /**
     * @summary `tDPIdentifier`.
     * @public
     * @readonly
     */
    readonly tDPIdentifier: TDPIdentifier;
    /**
     * @summary `registratorIdentifier`.
     * @public
     * @readonly
     */
    readonly registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        triggerStatus: TriggerStatus,
        tDPIdentifier: TDPIdentifier,
        registratorIdentifier?: OPTIONAL<RegistratorIdentifier>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.triggerStatus = triggerStatus;
        this.tDPIdentifier = tDPIdentifier;
        this.registratorIdentifier = registratorIdentifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a CreateOrRemoveTriggerDataResultArg
     * @description
     * 
     * This takes an `object` and converts it to a `CreateOrRemoveTriggerDataResultArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateOrRemoveTriggerDataResultArg`.
     * @returns {CreateOrRemoveTriggerDataResultArg}
     */
    public static _from_object (_o: { [_K in keyof (CreateOrRemoveTriggerDataResultArg)]: (CreateOrRemoveTriggerDataResultArg)[_K] }): CreateOrRemoveTriggerDataResultArg {
        return new CreateOrRemoveTriggerDataResultArg(_o.triggerStatus, _o.tDPIdentifier, _o.registratorIdentifier, _o._unrecognizedExtensionsList, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `triggerStatus`
         * @public
         * @static
         */

    public static _enum_for_triggerStatus: typeof _enum_for_TriggerStatus = _enum_for_TriggerStatus;
}

/**
 * @summary The Leading Root Component Types of CreateOrRemoveTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateOrRemoveTriggerDataResultArg: $.ComponentSpec[] = [
    new $.ComponentSpec("triggerStatus", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tDPIdentifier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("registratorIdentifier", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CreateOrRemoveTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateOrRemoveTriggerDataResultArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Extension Addition Component Types of CreateOrRemoveTriggerDataResultArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateOrRemoveTriggerDataResultArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateOrRemoveTriggerDataResultArg: $.ASN1Decoder<CreateOrRemoveTriggerDataResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateOrRemoveTriggerDataResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateOrRemoveTriggerDataResultArg (el: _Element): CreateOrRemoveTriggerDataResultArg {
    if (!_cached_decoder_for_CreateOrRemoveTriggerDataResultArg) { _cached_decoder_for_CreateOrRemoveTriggerDataResultArg = function (el: _Element): CreateOrRemoveTriggerDataResultArg {
    let triggerStatus!: TriggerStatus;
    let tDPIdentifier!: TDPIdentifier;
    let registratorIdentifier: OPTIONAL<RegistratorIdentifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "triggerStatus": (_el: _Element): void => { triggerStatus = $._decode_implicit<TriggerStatus>(() => _decode_TriggerStatus)(_el); },
        "tDPIdentifier": (_el: _Element): void => { tDPIdentifier = $._decode_explicit<TDPIdentifier>(() => _decode_TDPIdentifier)(_el); },
        "registratorIdentifier": (_el: _Element): void => { registratorIdentifier = $._decode_implicit<RegistratorIdentifier>(() => _decode_RegistratorIdentifier)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateOrRemoveTriggerDataResultArg,
        _extension_additions_list_spec_for_CreateOrRemoveTriggerDataResultArg,
        _root_component_type_list_2_spec_for_CreateOrRemoveTriggerDataResultArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CreateOrRemoveTriggerDataResultArg(
        triggerStatus,
        tDPIdentifier,
        registratorIdentifier,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_CreateOrRemoveTriggerDataResultArg(el);
}

let _cached_encoder_for_CreateOrRemoveTriggerDataResultArg: $.ASN1Encoder<CreateOrRemoveTriggerDataResultArg> | null = null;

/**
 * @summary Encodes a(n) CreateOrRemoveTriggerDataResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateOrRemoveTriggerDataResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_CreateOrRemoveTriggerDataResultArg (value: CreateOrRemoveTriggerDataResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateOrRemoveTriggerDataResultArg) { _cached_encoder_for_CreateOrRemoveTriggerDataResultArg = function (value: CreateOrRemoveTriggerDataResultArg, elGetter: $.ASN1Encoder<CreateOrRemoveTriggerDataResultArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TriggerStatus, $.BER)(value.triggerStatus, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_TDPIdentifier, $.BER)(value.tDPIdentifier, $.BER);
    if (value.registratorIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_RegistratorIdentifier, $.BER)(value.registratorIdentifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CreateOrRemoveTriggerDataResultArg(value, elGetter);
}


/* eslint-enable */
