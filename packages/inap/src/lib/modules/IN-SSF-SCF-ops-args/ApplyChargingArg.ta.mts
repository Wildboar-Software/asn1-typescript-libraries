/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../IN-SSF-SCF-datatypes/AChBillingChargingCharacteristics.ta.mjs";
// export { AChBillingChargingCharacteristics, _decode_AChBillingChargingCharacteristics, _encode_AChBillingChargingCharacteristics } from "../IN-SSF-SCF-datatypes/AChBillingChargingCharacteristics.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";


/**
 * @summary ApplyChargingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingArg ::= SEQUENCE {
 *   aChBillingChargingCharacteristics  [0]  AChBillingChargingCharacteristics,
 *   partyToCharge                      [2]  LegID OPTIONAL,
 *   extensions                         [3]  Extensions OPTIONAL,
 *   releaseIndication                  [4]  BOOLEAN OPTIONAL,
 *   releaseCause                       [5]  Cause OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ApplyChargingArg {
    /**
     * @summary `aChBillingChargingCharacteristics`.
     * @public
     * @readonly
     */
    readonly aChBillingChargingCharacteristics: AChBillingChargingCharacteristics;
    /**
     * @summary `partyToCharge`.
     * @public
     * @readonly
     */
    readonly partyToCharge: OPTIONAL<LegID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `releaseIndication`.
     * @public
     * @readonly
     */
    readonly releaseIndication: OPTIONAL<BOOLEAN>;
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
        aChBillingChargingCharacteristics: AChBillingChargingCharacteristics,
        partyToCharge?: OPTIONAL<LegID>,
        extensions?: OPTIONAL<Extensions>,
        releaseIndication?: OPTIONAL<BOOLEAN>,
        releaseCause?: OPTIONAL<Cause>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.aChBillingChargingCharacteristics = aChBillingChargingCharacteristics;
        this.partyToCharge = partyToCharge;
        this.extensions = extensions;
        this.releaseIndication = releaseIndication;
        this.releaseCause = releaseCause;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ApplyChargingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ApplyChargingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplyChargingArg`.
     * @returns {ApplyChargingArg}
     */
    public static _from_object (_o: { [_K in keyof (ApplyChargingArg)]: (ApplyChargingArg)[_K] }): ApplyChargingArg {
        return new ApplyChargingArg(_o.aChBillingChargingCharacteristics, _o.partyToCharge, _o.extensions, _o.releaseIndication, _o.releaseCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aChBillingChargingCharacteristics", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyToCharge", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("releaseIndication", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplyChargingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplyChargingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplyChargingArg: $.ASN1Decoder<ApplyChargingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingArg (el: _Element): ApplyChargingArg {
    if (!_cached_decoder_for_ApplyChargingArg) { _cached_decoder_for_ApplyChargingArg = function (el: _Element): ApplyChargingArg {
    let aChBillingChargingCharacteristics!: AChBillingChargingCharacteristics;
    let partyToCharge: OPTIONAL<LegID>;
    let extensions: OPTIONAL<Extensions>;
    let releaseIndication: OPTIONAL<BOOLEAN>;
    let releaseCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "aChBillingChargingCharacteristics": (_el: _Element): void => { aChBillingChargingCharacteristics = $._decode_implicit<AChBillingChargingCharacteristics>(() => _decode_AChBillingChargingCharacteristics)(_el); },
        "partyToCharge": (_el: _Element): void => { partyToCharge = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "releaseIndication": (_el: _Element): void => { releaseIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingArg,
        _extension_additions_list_spec_for_ApplyChargingArg,
        _root_component_type_list_2_spec_for_ApplyChargingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ApplyChargingArg(
        aChBillingChargingCharacteristics,
        partyToCharge,
        extensions,
        releaseIndication,
        releaseCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ApplyChargingArg(el);
}

let _cached_encoder_for_ApplyChargingArg: $.ASN1Encoder<ApplyChargingArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingArg (value: ApplyChargingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingArg) { _cached_encoder_for_ApplyChargingArg = function (value: ApplyChargingArg, elGetter: $.ASN1Encoder<ApplyChargingArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AChBillingChargingCharacteristics, $.BER)(value.aChBillingChargingCharacteristics, $.BER);
    if (value.partyToCharge !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_LegID, $.BER)(value.partyToCharge, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.releaseIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.releaseIndication, $.BER);
    }
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ApplyChargingArg(value, elGetter);
}


/* eslint-enable */
