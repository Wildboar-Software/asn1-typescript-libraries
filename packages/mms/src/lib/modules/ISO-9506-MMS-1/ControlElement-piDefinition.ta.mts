/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { ProgramInvocationState, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";


/**
 * @summary ControlElement_piDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlElement-piDefinition ::= SEQUENCE {
 *     piName [0] IMPLICIT Identifier,
 *     listOfDomains [1] IMPLICIT SEQUENCE OF Identifier,
 *     reusable [2] IMPLICIT BOOLEAN DEFAULT TRUE,
 *     monitorType [3] IMPLICIT BOOLEAN OPTIONAL,
 *     pIState [4] IMPLICIT ProgramInvocationState OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ControlElement_piDefinition {
    constructor (
        /**
         * @summary `piName`.
         * @public
         * @readonly
         */
        readonly piName: Identifier,
        /**
         * @summary `listOfDomains`.
         * @public
         * @readonly
         */
        readonly listOfDomains: Identifier[],
        /**
         * @summary `reusable`.
         * @public
         * @readonly
         */
        readonly reusable: OPTIONAL<BOOLEAN>,
        /**
         * @summary `monitorType`.
         * @public
         * @readonly
         */
        readonly monitorType: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pIState`.
         * @public
         * @readonly
         */
        readonly pIState: OPTIONAL<ProgramInvocationState>
    ) {}

    /**
     * @summary Restructures an object into a ControlElement_piDefinition
     * @description
     * 
     * This takes an `object` and converts it to a `ControlElement_piDefinition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlElement_piDefinition`.
     * @returns {ControlElement_piDefinition}
     */
    public static _from_object (_o: { [_K in keyof (ControlElement_piDefinition)]: (ControlElement_piDefinition)[_K] }): ControlElement_piDefinition {
        return new ControlElement_piDefinition(_o.piName, _o.listOfDomains, _o.reusable, _o.monitorType, _o.pIState);
    }

    /**
     * @summary Getter that returns the default value for `reusable`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reusable () { return true; }
}

/**
 * @summary The Leading Root Component Types of ControlElement_piDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlElement_piDefinition: $.ComponentSpec[] = [
    new $.ComponentSpec("piName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("listOfDomains", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reusable", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitorType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pIState", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of ControlElement_piDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlElement_piDefinition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlElement_piDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlElement_piDefinition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlElement_piDefinition: $.ASN1Decoder<ControlElement_piDefinition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlElement_piDefinition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlElement_piDefinition (el: _Element): ControlElement_piDefinition {
    if (!_cached_decoder_for_ControlElement_piDefinition) { _cached_decoder_for_ControlElement_piDefinition = function (el: _Element): ControlElement_piDefinition {
    let piName!: Identifier;
    let listOfDomains!: Identifier[];
    let reusable: OPTIONAL<BOOLEAN> = ControlElement_piDefinition._default_value_for_reusable;
    let monitorType: OPTIONAL<BOOLEAN>;
    let pIState: OPTIONAL<ProgramInvocationState>;
    const callbacks: $.DecodingMap = {
        "piName": (_el: _Element): void => { piName = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "listOfDomains": (_el: _Element): void => { listOfDomains = $._decode_implicit<Identifier[]>(() => $._decodeSequenceOf<Identifier>(() => _decode_Identifier))(_el); },
        "reusable": (_el: _Element): void => { reusable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "monitorType": (_el: _Element): void => { monitorType = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pIState": (_el: _Element): void => { pIState = $._decode_implicit<ProgramInvocationState>(() => _decode_ProgramInvocationState)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlElement_piDefinition,
        _extension_additions_list_spec_for_ControlElement_piDefinition,
        _root_component_type_list_2_spec_for_ControlElement_piDefinition,
        undefined,
    );
    return new ControlElement_piDefinition(
        piName,
        listOfDomains,
        reusable,
        monitorType,
        pIState
    );
}; }
    return _cached_decoder_for_ControlElement_piDefinition(el);
}

let _cached_encoder_for_ControlElement_piDefinition: $.ASN1Encoder<ControlElement_piDefinition> | null = null;

/**
 * @summary Encodes a(n) ControlElement_piDefinition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlElement_piDefinition, encoded as an ASN.1 Element.
 */
export
function _encode_ControlElement_piDefinition (value: ControlElement_piDefinition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlElement_piDefinition) { _cached_encoder_for_ControlElement_piDefinition = function (value: ControlElement_piDefinition): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.piName, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Identifier>(() => _encode_Identifier, $.BER), $.BER)(value.listOfDomains, $.BER),
            /* IF_DEFAULT */ (value.reusable === undefined || $.deepEq(value.reusable, ControlElement_piDefinition._default_value_for_reusable) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.reusable, $.BER)),
            /* IF_ABSENT  */ ((value.monitorType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.monitorType, $.BER)),
            /* IF_ABSENT  */ ((value.pIState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ProgramInvocationState, $.BER)(value.pIState, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlElement_piDefinition(value, elGetter);
}


/* eslint-enable */
