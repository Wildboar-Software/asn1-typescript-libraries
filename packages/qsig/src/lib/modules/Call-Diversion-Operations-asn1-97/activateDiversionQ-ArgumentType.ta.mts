/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Procedure, _decode_Procedure, _encode_Procedure, _enum_for_Procedure } from "../Call-Diversion-Operations-asn1-97/Procedure.ta.mjs";
// export { Procedure, _enum_for_Procedure, Procedure_cfu /* IMPORTED_LONG_ENUMERATION_ITEM */, cfu /* IMPORTED_SHORT_ENUMERATION_ITEM */, Procedure_cfb /* IMPORTED_LONG_ENUMERATION_ITEM */, cfb /* IMPORTED_SHORT_ENUMERATION_ITEM */, Procedure_cfnr /* IMPORTED_LONG_ENUMERATION_ITEM */, cfnr /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Procedure, _encode_Procedure } from "../Call-Diversion-Operations-asn1-97/Procedure.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
// export { BasicService, _enum_for_BasicService, BasicService_allServices /* IMPORTED_LONG_ENUMERATION_ITEM */, allServices /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_speech /* IMPORTED_LONG_ENUMERATION_ITEM */, speech /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_unrestrictedDigitalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, unrestrictedDigitalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_audio3100Hz /* IMPORTED_LONG_ENUMERATION_ITEM */, audio3100Hz /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telephony /* IMPORTED_LONG_ENUMERATION_ITEM */, telephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_teletex /* IMPORTED_LONG_ENUMERATION_ITEM */, teletex /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_telefaxGroup4Class1 /* IMPORTED_LONG_ENUMERATION_ITEM */, telefaxGroup4Class1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotexSyntaxBased /* IMPORTED_LONG_ENUMERATION_ITEM */, videotexSyntaxBased /* IMPORTED_SHORT_ENUMERATION_ITEM */, BasicService_videotelephony /* IMPORTED_LONG_ENUMERATION_ITEM */, videotelephony /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_BasicService, _encode_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { _decode_activateDiversionQ_ArgumentType_extension, _encode_activateDiversionQ_ArgumentType_extension, activateDiversionQ_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ArgumentType-extension.ta.mjs";
// export { activateDiversionQ_ArgumentType_extension, _decode_activateDiversionQ_ArgumentType_extension, _encode_activateDiversionQ_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/activateDiversionQ-ArgumentType-extension.ta.mjs";


/**
 * @summary activateDiversionQ_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activateDiversionQ-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class activateDiversionQ_ArgumentType {
    /**
     * @summary `procedure`.
     * @public
     * @readonly
     */
    readonly procedure: Procedure;
    /**
     * @summary `basicService`.
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `divertedToAddress`.
     * @public
     * @readonly
     */
    readonly divertedToAddress: Address;
    /**
     * @summary `servedUserNr`.
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `activatingUserNr`.
     * @public
     * @readonly
     */
    readonly activatingUserNr: PartyNumber;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<activateDiversionQ_ArgumentType_extension>;

    constructor (
        procedure: Procedure,
        basicService: BasicService,
        divertedToAddress: Address,
        servedUserNr: PartyNumber,
        activatingUserNr: PartyNumber,
        extension: OPTIONAL<activateDiversionQ_ArgumentType_extension>
    ) {
        this.procedure = procedure;
        this.basicService = basicService;
        this.divertedToAddress = divertedToAddress;
        this.servedUserNr = servedUserNr;
        this.activatingUserNr = activatingUserNr;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a activateDiversionQ_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `activateDiversionQ_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `activateDiversionQ_ArgumentType`.
     * @returns {activateDiversionQ_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (activateDiversionQ_ArgumentType)]: (activateDiversionQ_ArgumentType)[_K] }): activateDiversionQ_ArgumentType {
        return new activateDiversionQ_ArgumentType(_o.procedure, _o.basicService, _o.divertedToAddress, _o.servedUserNr, _o.activatingUserNr, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `procedure`
         * @public
         * @static
         */

    public static _enum_for_procedure = _enum_for_Procedure;        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of activateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_activateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("procedure", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("divertedToAddress", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("activatingUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of activateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_activateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of activateDiversionQ_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_activateDiversionQ_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_activateDiversionQ_ArgumentType: $.ASN1Decoder<activateDiversionQ_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) activateDiversionQ_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_activateDiversionQ_ArgumentType (el: _Element): activateDiversionQ_ArgumentType {
    if (!_cached_decoder_for_activateDiversionQ_ArgumentType) { _cached_decoder_for_activateDiversionQ_ArgumentType = function (el: _Element): activateDiversionQ_ArgumentType {
    let procedure!: Procedure;
    let basicService!: BasicService;
    let divertedToAddress!: Address;
    let servedUserNr!: PartyNumber;
    let activatingUserNr!: PartyNumber;
    let extension: OPTIONAL<activateDiversionQ_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "procedure": (_el: _Element): void => { procedure = _decode_Procedure(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "divertedToAddress": (_el: _Element): void => { divertedToAddress = _decode_Address(_el); },
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "activatingUserNr": (_el: _Element): void => { activatingUserNr = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_activateDiversionQ_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_activateDiversionQ_ArgumentType,
        _extension_additions_list_spec_for_activateDiversionQ_ArgumentType,
        _root_component_type_list_2_spec_for_activateDiversionQ_ArgumentType,
        undefined,
    );
    return new activateDiversionQ_ArgumentType(
        procedure,
        basicService,
        divertedToAddress,
        servedUserNr,
        activatingUserNr,
        extension
    );
}; }
    return _cached_decoder_for_activateDiversionQ_ArgumentType(el);
}

let _cached_encoder_for_activateDiversionQ_ArgumentType: $.ASN1Encoder<activateDiversionQ_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) activateDiversionQ_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The activateDiversionQ_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_activateDiversionQ_ArgumentType (value: activateDiversionQ_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_activateDiversionQ_ArgumentType) { _cached_encoder_for_activateDiversionQ_ArgumentType = function (value: activateDiversionQ_ArgumentType, elGetter: $.ASN1Encoder<activateDiversionQ_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Procedure(value.procedure, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_Address(value.divertedToAddress, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.activatingUserNr, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_activateDiversionQ_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_activateDiversionQ_ArgumentType(value, elGetter);
}


/* eslint-enable */
