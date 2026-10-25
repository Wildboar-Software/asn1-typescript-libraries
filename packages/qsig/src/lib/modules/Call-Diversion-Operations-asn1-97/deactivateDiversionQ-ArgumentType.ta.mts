/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Procedure, _decode_Procedure, _encode_Procedure, _enum_for_Procedure } from "../Call-Diversion-Operations-asn1-97/Procedure.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { _decode_deactivateDiversionQ_ArgumentType_extension, _encode_deactivateDiversionQ_ArgumentType_extension, type deactivateDiversionQ_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/deactivateDiversionQ-ArgumentType-extension.ta.mjs";

/**
 * @summary deactivateDiversionQ_ArgumentType
 * @description
 *
 * Argument of `deactivateDiversionQ`, from the Deactivating PINX to the Served
 * User PINX (ECMA-174 §6.3.1, §6.5.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-173/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * deactivateDiversionQ-ArgumentType ::= SEQUENCE {
 *     procedure Procedure,
 *     basicService BasicService,
 *     servedUserNr PartyNumber,
 *     deactivatingUserNr PartyNumber,
 *     extension CHOICE {
 *         single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class deactivateDiversionQ_ArgumentType {
    /**
     * @summary `procedure`.
     * @description
     *
     * CFU, CFB, or CFNR to deactivate (ECMA-174 §6.5.3.1.2).
     * @public
     * @readonly
     */
    readonly procedure: Procedure;
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service whose forwarding is to be deactivated, or all basic
     * services. The Served User PINX checks that it is consistent for the
     * served user (ECMA-174 §6.5.3.1.2; ECMA-173 §6.2.2.1.1).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * PISN number of the served user (ECMA-174 §6.5.3.1.2).
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `deactivatingUserNr`.
     * @description
     *
     * Number of the user requesting deactivation. The Served User PINX may use
     * it to decide whether deactivation is allowed (ECMA-174 §6.5.3.1.2).
     * @public
     * @readonly
     */
    readonly deactivatingUserNr: PartyNumber;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `DiversionExtensionSet`. The
     * standardized set is empty (ECMA-174 §6.3.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<deactivateDiversionQ_ArgumentType_extension>;

    constructor (
        procedure: Procedure,
        basicService: BasicService,
        servedUserNr: PartyNumber,
        deactivatingUserNr: PartyNumber,
        extension?: OPTIONAL<deactivateDiversionQ_ArgumentType_extension>
    ) {
        this.procedure = procedure;
        this.basicService = basicService;
        this.servedUserNr = servedUserNr;
        this.deactivatingUserNr = deactivatingUserNr;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a deactivateDiversionQ_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `deactivateDiversionQ_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `deactivateDiversionQ_ArgumentType`.
     * @returns {deactivateDiversionQ_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (deactivateDiversionQ_ArgumentType)]: (deactivateDiversionQ_ArgumentType)[_K] }): deactivateDiversionQ_ArgumentType {
        return new deactivateDiversionQ_ArgumentType(_o.procedure, _o.basicService, _o.servedUserNr, _o.deactivatingUserNr, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `procedure`
         * @public
         * @static
         */

    public static _enum_for_procedure: typeof _enum_for_Procedure = _enum_for_Procedure;        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService: typeof _enum_for_BasicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of deactivateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_deactivateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("procedure", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("deactivatingUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of deactivateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_deactivateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of deactivateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_deactivateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_deactivateDiversionQ_ArgumentType: $.ASN1Decoder<deactivateDiversionQ_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) deactivateDiversionQ_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_deactivateDiversionQ_ArgumentType (el: _Element): deactivateDiversionQ_ArgumentType {
    if (!_cached_decoder_for_deactivateDiversionQ_ArgumentType) { _cached_decoder_for_deactivateDiversionQ_ArgumentType = function (el: _Element): deactivateDiversionQ_ArgumentType {
    let procedure!: Procedure;
    let basicService!: BasicService;
    let servedUserNr!: PartyNumber;
    let deactivatingUserNr!: PartyNumber;
    let extension: OPTIONAL<deactivateDiversionQ_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "procedure": (_el: _Element): void => { procedure = _decode_Procedure(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "deactivatingUserNr": (_el: _Element): void => { deactivatingUserNr = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_deactivateDiversionQ_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_deactivateDiversionQ_ArgumentType,
        _extension_additions_list_spec_for_deactivateDiversionQ_ArgumentType,
        _root_component_type_list_2_spec_for_deactivateDiversionQ_ArgumentType,
        undefined,
    );
    return new deactivateDiversionQ_ArgumentType(
        procedure,
        basicService,
        servedUserNr,
        deactivatingUserNr,
        extension
    );
}; }
    return _cached_decoder_for_deactivateDiversionQ_ArgumentType(el);
}

let _cached_encoder_for_deactivateDiversionQ_ArgumentType: $.ASN1Encoder<deactivateDiversionQ_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) deactivateDiversionQ_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The deactivateDiversionQ_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_deactivateDiversionQ_ArgumentType (value: deactivateDiversionQ_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_deactivateDiversionQ_ArgumentType) { _cached_encoder_for_deactivateDiversionQ_ArgumentType = function (value: deactivateDiversionQ_ArgumentType, _elGetter: $.ASN1Encoder<deactivateDiversionQ_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Procedure(value.procedure, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.deactivatingUserNr, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_deactivateDiversionQ_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_deactivateDiversionQ_ArgumentType(value, elGetter);
}

/* eslint-enable */
